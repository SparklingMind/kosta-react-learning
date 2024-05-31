import React from "react";
//이미지를 import해서 태그명을 지정.
import imgName from "./assets/hawaii.jpg";
const Trip = () => {
  return (
    <div>
      {/* 이미지 src가 import됐다면 " " 안에 넣어주면 안 된다. */}
      <img src={imgName} alt="hawaii"></img>
    </div>
  );
};

export default Trip;
