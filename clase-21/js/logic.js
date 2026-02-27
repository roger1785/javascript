export function countResults(items) {
  return items.length;
}

export function isValidQuery(query) {
  return String(query ?? "").trim().length >= 3;
}
