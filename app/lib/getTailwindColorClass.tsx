export default function getTailwindColorClass(
  older: number | null,
  newer: number | null
): string {
  // used for startup
  if (older === null || newer === null) {
    return "white";
  }
  if (older < newer) return "green-600";
  if (older > newer) return "red-600";
  return "white";
}
