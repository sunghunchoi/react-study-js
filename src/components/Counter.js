import React from "react";

function Counter(){
    const style  = {
        backgroundColor: 'black',
        color: 'aqua',
        border: '2px solid white'
    }

    const onIncrease = () => {
        console.log("+1")
    }

    const onDecrease = () => {
        console.log("-1")
    }

    return (
        <div style={style}>
            <h1>0</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;