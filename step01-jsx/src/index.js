import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import JsxTest from "./JsxTest";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Hello() {
  return (
    <React.Fragment>
      <App />
      <h1>첫 test 입니dd다.22</h1>
      <h4>하하 - 신니다.</h4>
    </React.Fragment>
  );
}

function Menu() {
  return (
    <>
      <h3>점심 뭐 먹지?</h3>
      <h4>글쎄?</h4>
    </>
  );
}

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Hello/>
    <Menu/> */}
    <JsxTest />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
