import React, { useRef } from 'react';

const Ref01 = () => {
    const myRef = useRef();
    const colorChange = () => {
        // document.getElementById("a").style.backgroundColor = "blue"; //javascript방식
        //react에서는 실제 돔에 접근하기 위해서 useRef를 사용한다.
        console.log(myRef);
        myRef.current.style.backgroundColor = "blue";
        console.log(myRef.current.innerText);
    }
    return (
        <div>
            <h2>React Hooks - useref : Dom접근</h2>
            <button onClick={colorChange}>바탕색변경</button>
            <div id="a">박스</div>
            <div ref={myRef}>박스</div>
        </div>
    );
};

export default Ref01;