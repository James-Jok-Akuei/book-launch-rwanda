// Shared helpers for handling PLACEHOLDER content gracefully.

export function isPlaceholder(value) {
  return !value || /placeholder/i.test(value);
}

// Strip a trailing "PLACEHOLDER — …" editor note from a sentence of prose.
export function stripPlaceholder(text = "") {
  return text.replace(/\s*PLACEHOLDER[^.]*\.?\s*$/i, "").trim();
}
