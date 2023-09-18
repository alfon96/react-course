import useCounter from "../hooks/use-counter";
import Card from "./Card";

const ForwardCounter = () => {
  useCounter(() => {}, []);
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
