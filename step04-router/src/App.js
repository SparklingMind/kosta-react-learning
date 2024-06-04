import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Router, Routes, useNavigate } from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
function App() {
  const navigate = useNavigate();
  const btnClick1 = () => {
    //기능
    navigate("/user/" + 50); //params.id = 50
    //컴포넌트 렌더링
  };
  const btnClick2 = () => {
    navigate("/admin");
  };
  const btnClick3 = () => {
    navigate(-1);
  };
  return (
    <>
      <Link to={"/"}>HOME</Link>
      <Link to={"/admin"}>ADMIN</Link>
      <Link to={"/user"}>USER</Link>

      <hr />

      <a href="/">HOME</a>
      <a href="/admin">ADMIN</a>
      <a href="/user">USER</a>

      <hr />

      <button onClick={btnClick1}>User로 이동</button>
      <button onClick={btnClick2}>Admin로 이동</button>
      <button onClick={btnClick3}>Go Back</button>

      <h3>어떤 컴포넌트가 렌더링되어도 전 항상 나와요.</h3>
      <header>환영합니다.(header)</header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        {/* :id가 있으면 /밑으로 어떤 주소를 써도 user로 이동한다. */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <footer>
        작성자 : 정다희
        <br />
        주소 :
        <br />
        (footer)
      </footer>
    </>
  ); // Remove the semicolon after the return statement
}

export default App;
