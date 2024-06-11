import React, { useEffect, useState } from "react";
import BoardItem from "../../components/BoardItem";
import axios from "axios";

const Home = () => {
  //DB목록을 저장해서 관리 할 useState
  const [boards, setBoards] = useState([]);

  //서버에서 데이터 조회해와야 함. -> 마운트 될 때만 axios 가져옴.
  useEffect(() => {
    axios
      .get("http://localhost:9000/boards", {
        headers: {
          Authorization: localStorage.getItem("Authorization"), //헤더에 로컬스토리지에 저장된 토큰을 보냄 -> 스프링 시큐리티.
        },
      })
      .then((res) => {
        setBoards(res.data); //state에서 관리되는 변수가 변경되어 update(re-redering)
      })
      .catch((err) => {
        let errMessage = err.response.data.type + "\n";
        errMessage += err.response.data.title + "\n";
        errMessage += err.response.data.detail + "\n";
        errMessage += err.response.data.status + "\n";
        errMessage += err.response.data.instance + "\n";
        errMessage += err.response.data.timestamp;

        alert(errMessage);
      });
  }, []);
  return (
    <div>
      <h1 style={{ padding: "20px" }}>전체게시물 보기 </h1>

      {boards.map((board) => (
        <BoardItem key={board.id} board={board} />
      ))}
    </div>
  );
};

export default Home;
