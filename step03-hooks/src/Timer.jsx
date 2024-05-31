import React from 'react';
import { useEffect } from 'react';

const Timer = () => {
    console.log("Timer 렌더링...")
    
    //렌더링 될 때 해야할 일을 useEffect에서 설정해줘야 한다.
    
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("타이머 실행 중...");
        }, 1000);
        return () => {  //useEffect가 실행 시에 바로 호출되는 것이 아니라, Timer 컴포넌트가 사라질 때 실행된다.
            console.log("정리 중입니다,,,");
            clearInterval(timer);
        }
    },[]);  //2번째 인수에 [] 있으면 처음에 렌더링 될 때만 실행. 아니면 부모 컴포넌트가 렌더링 될 때마다 같이 렌더링 되면서, 엄청 빨라진다.
   
    return (
        <div>
            <span>
                타이머를 시작합니다. console 확인하기!
            </span>
        </div>
    );
};

export default Timer;