import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(1);
  // const handleClick = ()=>{
  //   setValue((currentState)=>{
  //     const newState = currentState+1;
  //     return newState;
  //   });
  //   console.log(value);
  // }
  const handleClick = () => {
    setTimeout(() => {
      console.log("clicked the button");
      setValue((currentState)=>{
        let newState = currentState+1;
        return newState;
      });
    },3000);
  };
  return (
    <>
      <h4>{value}</h4>
      <button className="btn" onClick={handleClick}></button>
    </>
  );
};

export default UseStateGotcha;
