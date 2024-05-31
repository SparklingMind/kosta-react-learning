import React from 'react';
import Timer from './Timer';
import { useState } from 'react';

const Effect02 = () => {
    const [showTimer, setShowTimer] = useState(false);
    return (
        <div>
            <h3>useEffect clean up 작업</h3>
            {/* showTimer가 true일 때만 Timer 실행하는 문법 */}
            {showTimer && <Timer />} 

            <button onClick={() => {
                setShowTimer(!showTimer);   //showTimer의 반대값을 설정 -> toggle
            }}>Toggle Timer</button>
            
        </div>
    );
};

export default Effect02;