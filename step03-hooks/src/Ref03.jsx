import React, { useRef, useState } from 'react';


const Ref03 = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    //useState는 값이 변할 때마다 화면을 리렌더링
    const stateUp = () => {
        setCount(count+1);
    }

    //constRef.current 값을 변경하여도 화면을 다시 그리지는 않지만, 내부적으로는 값이 변경된다.
    const refUp = () => {
        countRef.current = countRef.current + 1;
        console.log("countRef.current" , countRef.current);
    }

    return (
        <div>
            <p>
                State : {count} <button onClick={stateUp}>state up</button>
            </p>
            <p>
                Ref : {countRef.current} <button onClick={refUp}>ref down</button>
            </p>
        </div>
    );
};

export default Ref03;