import { useEffect, useState } from "react";

const useCounter = (forward = true, increment = 1) => {
  const [counter, setCounter] = useState(0);
  if (!forward) {
    increment *= -1;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + increment);
    }, 1000);

    return () => clearInterval(interval);
  }, [forward, increment]);

  return counter;
};

export default useCounter;
