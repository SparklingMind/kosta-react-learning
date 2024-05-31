import Article from "./Article";
import Header from "./Header";
import Nav from "./Nav";

function App() {
  return (
    <>
      <Header title="Trip"></Header>
      <Nav/>
      <Article
        title="태어난 김에 세계일주"
        body="올 여름 최고의 찬스"
      ></Article>
    </>
  );
}

export default App;
