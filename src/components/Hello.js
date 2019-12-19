import React from "react";
import './Hello.css'

function Hello({name,color,isSpecial}){
    return (
        <>
            <div className="gray-box">
                {isSpecial ? <b>*</b> : null}
                Hello CSS By ClassName
            </div>
            <div>
                {isSpecial ? <b>*</b> : null}
                Hello! {name}
            </div>
            <div style={{color: color}}>
                {isSpecial && <b>***</b>}
                Hello! {name}
            </div>
        </>
        )
}

Hello.defaultProps = {
    name: 'No Name',
    color: 'green',
    isSpecial: false
}

export default Hello;