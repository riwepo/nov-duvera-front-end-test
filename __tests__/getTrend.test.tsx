import { Trend, getTrend } from "../app/features/trending-number/getTrend";

describe("getTrend component test suite", () => {
  it("returns unknown if older is null", () => {
    const older = null;
    const newer = 1234;
    const result = getTrend(older, newer);
    expect(result).toBe(Trend.Unknown);
  });
  it("returns unknown if newer is null", () => {
    const older = 1234;
    const newer = null;
    const result = getTrend(older, newer);
    expect(result).toBe(Trend.Unknown);
  });
  it("returns increasing if newer > older", () => {
    const older = 1;
    const newer = 2;
    const result = getTrend(older, newer);
    expect(result).toBe(Trend.Increasing);
  });
  it("returns decreasing if newer < older", () => {
    const older = 2;
    const newer = 1;
    const result = getTrend(older, newer);
    expect(result).toBe(Trend.Decreasing);
  });
  it("returns steady if newer = older", () => {
    const older = 1;
    const newer = 1;
    const result = getTrend(older, newer);
    expect(result).toBe(Trend.Steady);
  });
});
