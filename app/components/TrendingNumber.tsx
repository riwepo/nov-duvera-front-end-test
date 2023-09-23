import getTailwindColorClass from "../lib/getTailwindColorClass";

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
  const colorClass = getTailwindColorClass(props.older, props.newer);
  return (
    <p className={`text-${colorClass} ${props.className}`}>
      {props.newer !== null ? props.newer : "-------"}
    </p>
  );
};

export default TrendingNumber;
