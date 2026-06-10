create table if not exists public.profiles (
  id uuid primary key references auth.users on delete cascade,
  username text not null unique,
  role text not null default 'student',
  level int,
  created_at timestamptz not null default now()
);

create table if not exists public.exam_results (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users on delete cascade,
  level int not null,
  score int not null,
  total int not null,
  by_concept jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.progress (
  user_id uuid not null references auth.users on delete cascade,
  exercise_id text not null,
  status text not null,
  attempts int not null default 0,
  hints_used int not null default 0,
  solved_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (user_id, exercise_id)
);

create or replace function public.is_admin()
returns boolean
language sql
security definer
stable
set search_path = public
as $$
  select exists (select 1 from public.profiles where id = auth.uid() and role = 'admin');
$$;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  first_account boolean;
begin
  select count(*) = 0 into first_account from public.profiles;
  insert into public.profiles (id, username, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'username', split_part(new.email, '@', 1)),
    case when first_account then 'admin' else 'student' end
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.exam_results enable row level security;
alter table public.progress enable row level security;

drop policy if exists profiles_select on public.profiles;
create policy profiles_select on public.profiles
  for select using (auth.uid() = id or public.is_admin());

drop policy if exists profiles_update on public.profiles;
create policy profiles_update on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);

drop policy if exists exam_results_select on public.exam_results;
create policy exam_results_select on public.exam_results
  for select using (auth.uid() = user_id or public.is_admin());

drop policy if exists exam_results_insert on public.exam_results;
create policy exam_results_insert on public.exam_results
  for insert with check (auth.uid() = user_id);

drop policy if exists progress_select on public.progress;
create policy progress_select on public.progress
  for select using (auth.uid() = user_id or public.is_admin());

drop policy if exists progress_insert on public.progress;
create policy progress_insert on public.progress
  for insert with check (auth.uid() = user_id);

drop policy if exists progress_update on public.progress;
create policy progress_update on public.progress
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

create table if not exists public.exercises (
  id text primary key,
  level int not null default 0,
  title text not null,
  prompt text not null default '',
  starter text not null default '',
  tests jsonb not null default '[]',
  hints jsonb not null default '[]',
  concepts jsonb not null default '[]',
  solution text not null default '',
  view_code text,
  hidden boolean not null default false,
  position int not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.settings (
  key text primary key,
  value jsonb not null
);

alter table public.exercises enable row level security;
alter table public.settings enable row level security;

drop policy if exists exercises_select on public.exercises;
create policy exercises_select on public.exercises
  for select using (not hidden or public.is_admin());

drop policy if exists exercises_write on public.exercises;
create policy exercises_write on public.exercises
  for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists settings_select on public.settings;
create policy settings_select on public.settings
  for select using (auth.role() = 'authenticated');

drop policy if exists settings_write on public.settings;
create policy settings_write on public.settings
  for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists profiles_update on public.profiles;
create policy profiles_update on public.profiles
  for update using (auth.uid() = id or public.is_admin())
  with check (auth.uid() = id or public.is_admin());

create or replace function public.guard_role_change()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.role is distinct from old.role and not public.is_admin() then
    raise exception 'role change not allowed';
  end if;
  return new;
end;
$$;

drop trigger if exists profiles_guard_role on public.profiles;
create trigger profiles_guard_role
  before update on public.profiles
  for each row execute function public.guard_role_change();
