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
      //url: "http://localhost:9000/a",
      url: " http://localhost:9000/user",
      method: "post",
      data: { name: "Jung", email: "hh@gmail.com", age: 25 },
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //삭제
  const deleteUser = () => {
    axios({
      url: " http://localhost:9000/user/3",
      method: "delete",
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.title + " | " + err.response.data.detail);
      });
  };

  //수정
  const putUser = () => {
    axios({
      url: " http://localhost:9000/user/2",
      method: "put",
      data: { name: "gaHyun", email: "gaHyun@gmail.com", age: 25 },
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getById = () => {
    axios({
      url: " http://localhost:9000/user/5",
      method: "get",
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUsers = () => {
    axios({
      url: " http://localhost:9000/user",
      method: "get",
      //data: { name: "Jung", email: "hh@gmail.com", age: 25 },
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
