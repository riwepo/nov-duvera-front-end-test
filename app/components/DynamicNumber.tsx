interface DynamicNumberProps {
  number: number;
  colorClass: string;
}

const DynamicNumber: React.FC<DynamicNumberProps> = function (props) {
  return <p className={props.colorClass}>{props.number}</p>;
};

export default DynamicNumber;
