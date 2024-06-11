import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const BoardItem = (props) => {
  const { id, title, content, regDate, member } = props.board; //구조분해할당
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          {/* 제목은 구조분해할당해서 내가 새로 붙인 이름으로. 작성자는 props에서 넘어온 원래 이름 참고해서. */}
          제목 : {title} / 작성자 :{props.board.member.name}
        </Card.Title>
        <Link className="btn btn-primary" to={"/board/" + id}>
          상세 보기
        </Link>
      </Card.Body>
    </Card>
  );
};

export default BoardItem;
