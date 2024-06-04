import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  //전체조회
  const selectAll = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        console.log(result);
        result.data.map((user) => {
          console.log(user.id + " | " + user.name);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const selectById = () => {
    axios({
      url: "https://jsonplaceholder.typicode.com/users/2",
      method: "get",
      //data :
    })
      .then((result) => {
        console.log(result.data);
      })
      .then(() => {
        console.log("성공 이후 해야할 작업입니다.");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  ////////////////spring Boot///////////////
  const insertUser = () => {
    axios({
      url: "http://localhost:9000/a",
      method: "get",
      //data :
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteUser = () => {};
  const putUser = () => {};
  const getById = () => {};
  const getUsers = () => {};

  return (
    <>
      <h3>React Axios</h3>
      <button onClick={selectAll}>get-selectAll</button>
      <button onClick={selectById}>get-selectById</button>
      <hr />
      <h3>Spring Boot 연동하기</h3>
      <button onClick={insertUser}>Post - user등록</button>
      <button onClick={deleteUser}>Delete - user삭제</button>
      <button onClick={putUser}>Put - user수정</button>
      <button onClick={getById}>GetUser - user조회</button>
      <button onClick={getUsers}>GetAllUsers - 전체조회</button>
    </>
  );
}

export default App;
