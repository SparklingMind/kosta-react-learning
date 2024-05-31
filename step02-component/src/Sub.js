import React from "react";

let num = 100;
let name = "heejung";
const Sub = () => {
  return (
    <div>
      sub입니다. <br />
      num : {num} / name : {name}
    </div>
  );
};

export default Sub;
export { num, name };
