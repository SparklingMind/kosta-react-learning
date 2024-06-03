import React, { useEffect, useRef, useState } from 'react';

const Ref02 = () => {
    const inputRef = useRef();
    const [no, setNo] = useState(0);
    
    //컴포넌트가 렌더링되면 커서 놓기를 하고 싶다.
    useEffect(() => {
        console.log("useEffect 렌더링...");
        inputRef.current.focus();
    }, []) //최초 마운트시만 호출.
    
    //inputRef.current.focus();  //에러발생 (element를 렌더링하기 전이기 때문에 실제 dom접근 불가.)
    const login = () => {
        console.log("login...");
        
        //no증가
        setNo(no + 1);
        //text의 value 조회
        alert(`${inputRef.current.value}님 로그인입니다.`)//자바스크립트 백틱문자.

    }
    return (
        <div>
            no : {no} <br></br>
            <input type="text" ref={inputRef} />
            <button onClick={login}>로그인</button>
        </div>
    );
};

export default Ref02;