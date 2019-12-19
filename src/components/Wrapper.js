import React from "react";

function Wrapper({children}){
    const style = {
        border: '2px solid black',
        padding: '16px'
    };

    return (
        <div style={style}>
            {/* Wrapper 에서 children 을 속성으로 받아 렌더링 해줘야 감싸고있는 컴포넌트들이 렌더링됨. */}
            {children}
        </div>
    )
}

export default Wrapper;