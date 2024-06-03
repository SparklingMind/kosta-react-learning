import React, { useEffect, useRef, useState } from 'react';

const Ref05 = () => {

    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    //컴포넌트가 총 몇 번 렌더링 되었지만 횟수를 계산
    useEffect(() => {   
        console.log("렌더링...");
        //setCount(count + 1); //무한 루프. state가 변경되면 useEffect가 실행되는데, 이 안에서 또 state를 변경하기 때문.
        countRef.current = countRef.current + 1;    //리렌더링 x
        console.log(countRef.current);
    });
    

    return (
        <div>
            <p>count : {countRef.current}<button onClick={() => {
                setCount(count + 1);
            }}>Up</button></p>
        </div>
    );
};

export default Ref05;