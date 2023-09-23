export enum Trend {
  Unknown = "UNKNOWN",
  Steady = "STEADY",
  Increasing = "INCREASING",
  Decreasing = "DECREASING",
}

export function getTrend(older: number | null, newer: number | null): Trend {
  if (older === null || newer === null) {
    return Trend.Unknown;
  }
  if (older < newer) return Trend.Increasing;
  if (older > newer) return Trend.Decreasing;
  return Trend.Steady;
}
