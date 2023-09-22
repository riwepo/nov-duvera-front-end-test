export default function getTailwindColorClass(
  older: number,
  newer: number
): string {
  if (older < newer) return "green-600";
  if (older > newer) return "red-600";
  return "white";
}
