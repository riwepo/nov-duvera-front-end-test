import { NUMBER_SERVER_DIGITS } from "../lib/constants";
import { Trend, getTrend } from "../lib/getTrend";

interface TrendingNumberProps {
  older: number | null;
  newer: number | null;
  className?: string;
}

// display the newer number
// if the number is unchanged, display in white
// if the number has increased, display in green
// if the number has decreased, display in red
// on startup numbers may be null
// display dashes if newer is null

const TrendingNumber: React.FC<TrendingNumberProps> = function (props) {
  const trendToTextColor = {
    [Trend.Unknown]: "text-white",
    [Trend.Increasing]: "text-green-600",
    [Trend.Decreasing]: "text-red-600",
    [Trend.Steady]: "text-white",
  };
  const trend = getTrend(props.older, props.newer);
  const textColorClass = trendToTextColor[trend];
  const dashes = "-".repeat(NUMBER_SERVER_DIGITS);
  return (
    <p className={`${textColorClass} ${props.className}`}>
      {props.newer !== null ? props.newer : dashes}
    </p>
  );
};

export default TrendingNumber;
