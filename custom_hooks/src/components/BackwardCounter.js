import useCounter from "../hooks/use-counter";
import Card from "./Card";

const BackwardCounter = () => {
  const counter = useCounter(false, 8);
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
