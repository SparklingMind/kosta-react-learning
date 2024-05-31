import React, { useState } from 'react';

const MapKeyTest01 = () => {
    console.log("MapKeyTest01 call....rerendering..");

    // const menu = ["짬뽕", "짜장"];
    const [list, setList] = useState([{id:1, value:"짬뽕"}, {id:2, value:"짜장"} ]);
    const [inputValue, updateInputValue] = useState("");
    //inputValue는 text창의 값이 변경되면 updateInputValue로 변경. 두 변수의 이름은 자유롭게 설정 가능.
    //useState에 의해 관리되는 변수의 상태가 변경되면 화면을 다시 그린다.
    //리렌더링(rerendering)은 함수가 다시 호출된다는 이야기 ->컴포넌트 = 함수 안에 들어있는 모든 변수는 초기화된다.
    // react는 list.push()같은 명령어 사용 불가능 -> 반드시 useState를 사용해야한다.
    //추가
    const addList = () => {
        console.log(inputValue);
        //text박스의 값을 조회
        //react에서는 virtual dom에 의해 화면을 업데이트해주기 때문에 실제 dom에 접근할 수는 없음. -> useState 사용해야함.
        setList((preList) => [ {id: list.length + 1, value: inputValue}, ...preList]);
        //추가할 때마다 모든 게 지워지고 전체가 갱신됨 -> 성능 상의 이슈 발생. (100개면 100개 새로 고쳐야.)
        //-> index로 전체 갱신 제어.
        
        //추가 후에 text박스 지우기
        updateInputValue("");
    }

    const inputChangeValue = (e) => {
        updateInputValue(e.target.value);
    }
    return (
        <div>
            <input type="text" onChange={inputChangeValue} value={inputValue} />
            <button onClick={addList}>추가</button>
            <ul>
                {
                    list.map((menu, i) => {
                    return <li key={menu.id}>{menu.value}</li>;
                    })
                }
                
            </ul>
        </div>
    );
};

export default MapKeyTest01;