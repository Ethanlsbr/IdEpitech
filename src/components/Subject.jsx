export default function Subject({ subject }) {
  return (
    <div className="flex h-full flex-col bg-[#0d1117]">
      <object width="100%" height="100%" data={subject} type="application/pdf">
        {" "}
      </object>
    </div>
  );
}
