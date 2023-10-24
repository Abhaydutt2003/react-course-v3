import { useEffect, useState } from "react";

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []); //* [] makes sure the useEffect is ran only one time
  if (isLoading) {
    return <h2>Loading....</h2>;
  } else {
    return <h2>My App</h2>;
  }
};
export default MultipleReturnsBasics;
