import React, {useState} from "react";

function Counter(){

    // 원래는 이렇게했는데..
    // const numberState = useState(0);
    // const number = numberState[0];
    // const setNumber = numberState[1];

    // 배열  비구조화 할당을  통하여 각 원소를 자동으로 추출해주는 문법.
    const [number, setNumber] = useState(0);


    const style  = {
        backgroundColor: 'black',
        color: 'aqua',
        border: '2px solid white'
    }

    const onIncrease = () => {
        console.log("+1")
        // setNumber(number + 1);
        // 기존 값을 어떻게 업데이트 할 지에 대한 함수를 등록하는 방식으로도 값을 업데이트 할 수 있다.
        setNumber(preNumber => preNumber + 1);
    }

    const onDecrease = () => {
        console.log("-1")
        // setNumber(number -1);
        setNumber(preNumber => preNumber -1);
    }

    return (
        <div style={style}>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;