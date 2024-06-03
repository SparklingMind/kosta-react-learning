import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import State01 from "./State01";
import Effect01 from "./Effect01";
import Effect02 from "./Effect02";
import Memo01 from "./Memo01";
import Ref01 from "./Ref01";
import Ref02 from "./Ref02";
import Ref03 from "./Ref03";
import Ref04 from "./Ref04";
import Ref05 from "./Ref05";
import Context01 from "./Context01";
import Context02 from "./Context02";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<State01 />);
// root.render(<Effect01 />);
// root.render(<Effect02 />);
// root.render(<Memo01 />);
// root.render(<Ref01 />);
// root.render(<Ref02 />);
// root.render(<Ref03 />);
//root.render(<Ref04 />);
// root.render(<Ref05 />);
// root.render(<Context01 />);
root.render(<Context02 />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
