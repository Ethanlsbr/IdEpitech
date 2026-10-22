export function completionMark(id) {
  const value = localStorage.getItem(id);
  if (value === "gold") return "gold";
  if (value === "true") return true;
  return false;
}

export function isCompleted(id) {
  return completionMark(id) !== false;
}

export function saveCompletion(id, gold) {
  if (gold) {
    localStorage.setItem(id, "gold");
  } else if (localStorage.getItem(id) !== "gold") {
    localStorage.setItem(id, "true");
  }
}
