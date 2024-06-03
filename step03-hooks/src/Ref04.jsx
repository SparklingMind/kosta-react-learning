import React, { useRef, useState } from 'react';

const Ref04 = () => {
    console.log("리렌더링....")
    const countRef = useRef(0);
    let countLet = 0;
    //화면갱신(리렌더링)을 위한 변수
    const [render, setRender] = useState(0);
    const refUp = () => {
        countRef.current = countRef.current + 1;
        console.log("countRef = ", countRef.current);
    }
    const letUp= () => {
        countLet = countLet+1;
        console.log("countLet=",countLet)
    }
    return (
        <div>
            <p>Ref : {countRef.current} <button onClick={refUp}> Ref up </button></p>
            <p>let : {countLet} <button onClick={letUp}> let up </button></p>
            <p>리렌더링 : <button onClick={() => { setRender(render + 1) }}> 리렌더링 </button></p>

        </div>
    );
};

export default Ref04;