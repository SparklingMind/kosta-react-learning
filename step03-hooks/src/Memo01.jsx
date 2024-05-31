import React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';

const Memo01 = () => {
    const [list, setList] = useState([1, 2, 3, 4]);
    const [str, setStr] = useState("합계 결과");
    
    //list 항목 더하기 기능
    const getAddList = () => {
        let sum = 0;
        list.forEach((i) => {
            sum = sum + i;
        });
        console.log("sum = " + sum);
        return sum;
    }//getAddList함수 끝

    const addResult = useMemo(() => { return getAddList() }, [list]); //두 번째 인수로 어떤 변수가 변했을 때 상태 관리할지 설정하기.

    return (
        <div>
            <h3>useMemo 사용하기</h3>
            
            <button onClick={(() => { setList([...list, 10]) })}>리스트 추가</button>   
            <button onClick = {()=>{setStr("리스트합계")}}>문자 변경</button>
            {
                 list.map((item, index) => (
                    <h4 key={index}>{item}</h4>
                ))
            }
            {/* <div>{str} : {getAddList()}</div> */}
            {/* 메모이제이션 호출 */}
            <div>{str} : {addResult}</div> 
        </div>
        
    );
};

export default Memo01;