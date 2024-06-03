import React, { useContext } from 'react';
import { GlobalContext } from './Context02';

const Child03 = () => {
    //useContext의 이름은 아무거나 쓰는 게 아니고 GlobalContext에 있는 이름 써야함.
    const { btnClick02 } = useContext(GlobalContext);
    return (
        <div>
            <h3>Child03입니다.</h3>
            <button onClick={btnClick02}>클릭</button>
        </div>
    );
};

export default Child03;