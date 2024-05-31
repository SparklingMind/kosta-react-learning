import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Library from "./components/Library";
import CommentList from "./comments/CommentList";
import UseStateCount from "./mapTest/UseStateCount";
import MapKeyTest01 from "./mapTest/MapKeyTest01";
import ExportTest from "./ExportTest";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<CommentList />);
// root.render(<UseStateCount />);
// root.render(<MapKeyTest01 />);
root.render(<ExportTest></ExportTest>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
