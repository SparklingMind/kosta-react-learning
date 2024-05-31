import React from "react";
import Trip from "./Trip";
const Article = (props) => {
  return (
    <>
      <div>
        <h2>{props.title}</h2>
        <p>이번 여름에 바다가 있는 최고의 테마여행을 시작합니다.</p>
      </div>
      <Trip></Trip>
    </>
  );
};

export default Article;
