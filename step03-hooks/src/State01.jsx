import React from "react";
import { useState } from "react";
import Sub from "./Sub";

const State01 = () => {
  console.log("State01 렌더링...");
  // let number = 1;
 // number++;   //리액트는 돔접근이 불가. 증가는 되지만 실제 dom에는 반영이 안 됨. -> useState사용해야 함.
  const [number, setNumber] = useState(0);  //배열이기 때문에 let이 아닌 const 사용 (객체이므로 주소 사용)
  const addFn = () => {
   
    
    setNumber(number + 1)
    console.log("number = " + number);
  };
  return (
    <div>
      <h1>number : {number}</h1>
      <button onClick={addFn}>더하기</button>
      <Sub />
    </div>
  );
};

export default State01;
