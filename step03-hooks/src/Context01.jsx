import React, { createContext, useContext } from 'react';

//선언의 위치는 반드시 function 외부에 한다.
const ThemeContext = createContext(); // context는 관례적으로 변수명을 대문자로 많이 쓴다.

const Context01 = () => {
    const themeDefault = { border: "10px solid blue" };
    
    return (
        <ThemeContext.Provider value={themeDefault}>
            <div>
                <h1>React Context API</h1>
                <Sub01/>
            </div>
        </ThemeContext.Provider>
    );
};

function Sub01() {
    const theme = useContext(ThemeContext);
    return (
        <ThemeContext.Provider value={{ border: "3px dotted pink" }}>
            <div style={theme}>
                <h3>Sub01</h3>
                <Sub02 />
            </div>
        </ThemeContext.Provider>
    );
}

function Sub02(){
    return (
        <>
            <h3>Sub02</h3>
            <Sub03 />
        </>
    );
}

function Sub03() {
    const theme = useContext(ThemeContext);
    return (
        <div style={theme}>
            <h3>Sub03</h3>
        </div>
    );
}

export default Context01;
