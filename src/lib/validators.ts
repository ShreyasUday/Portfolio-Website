export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function cleanText(input: string, maxLen: number) {
  return input.trim().replace(/\s+/g, " ").slice(0, maxLen);
}

