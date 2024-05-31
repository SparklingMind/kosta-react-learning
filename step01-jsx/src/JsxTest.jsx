
import index from "./index.css";
//함수 이름의 첫글자는 대문자
const JsxTest = () => {
    //javascript문법
    const text = "오늘은 목요일";
    const sayHello = () => {
        console.log("버튼 클릭");
    
    }
    const cssStyle = {
        color: "red",
        backgroundColor:"yellow"    //자바스크립트에서는 스네이크표기법(하이픈)이 아니라 카멜표기법을 써준다.
    }
    sayHello(); //이 순간 함수를 호출한다.
    return (
        <>
            {/* html에서와 다르게 클래스를 사용할 때 className이란 키워드를 사용한다. */}
            <h3 className="a">JSX문법 {text}</h3> 
            
            {/* sayHello라는 이벤트를 등록. 실행하는 게 아니기 때문에 괄호 넣어주지 않음. */}
            <button onClick={sayHello}>클릭</button>
            
            <br></br>
            <button onClick={sayHello}>클릭2</button>

                {/* 그냥 쓰면 텍스트. 중괄호를 사용하면 jsx의 표현식. */}
                {1 + 1 === 2 ? <div>맞음</div> : <div>틀림</div>}
                
            <hr />
            
                {/* 맞을 때만 실행. false면 실행하지 않음.*/}
                {1 + 1 === 2 && <div style = {cssStyle}>정답!</div>}
                
            
            
        </>
    );
};

export default JsxTest;