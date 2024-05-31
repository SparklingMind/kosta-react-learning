import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Effect01 = () => {
    const [num, setNum] = useState(0);
    const [search, setSearch] = useState(0);
    useEffect(() => {   //마운트 될 때,,, 업데이트 될 때,, 항상 실행됨.
        console.log("Effect01 실행됨... 렌더링 될 때마다...");
    })

    useEffect(() => {
        console.log("Effect01 실행됨... 최초 실행될 때와 새로 Mount 될 때만...");
        download()
    }, []);
    
     useEffect(() => {
        console.log("Effect01 실행됨... 최초 실행될 때와 새로 Mount 될 때만...");
        //download()
     }, [num]);
    
    
     useEffect(() => {
        console.log("Effect01 실행됨... 최초 실행될 때와 새로 Mount 될 때만...");
        download()
    },[search] );
    
    // useEffect(() => { 
    //     console.log("Effect01 실행됨... 최초 실행될 때와 num에 변화가 있을 때만...");
    // },[num])

    const download = ()=>{
        //최초의 페이지 렌더링시, 초기치데이터를 조회했다 치고...그 결과를 num에 초기화 해준다.
        setNum(5);
    }


    return (
        <div>
            <h3>useEffect 함수 test</h3>
            <h4>num : {num}</h4>
            <button onClick={() => { setNum(num + 1) }}>1씩 증가</button>
            
            <h4>search : {search}</h4>
            
            <button onClick={()=>{setSearch(2)}}>검색</button>
        </div>
    );
};

export default Effect01;