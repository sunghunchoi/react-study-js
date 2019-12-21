import React, {useState} from "react";

function InputSample() {

    // input 의 개수가 여러개가 됬을 때는 단순히 useState 를 여러번 사용하기보다는
    // useState 의 초깃값을 단순 문자열 형태가아닌 객체 형태로 상태를 관리함.
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    // 비구조화 할당을 통해 값 추출
    const { name, nickname } = inputs;

    const onChange = (e) => {
        // e.target 에서 name 과 value 를 추출.
        const { value, name } = e.target;
        setInputs({
            ...inputs,    // 기존의 input 객체를 복사한 뒤
            [name] : value //  name 키를 가진 값을 value 로 설정.
        })
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        })
    }

    return(
        <div>
            <input
                name = "name"
                placeholder="이름"
                onChange={onChange}
                value = {name}
            />
            <input
                name = "nickname"
                placeholder="닉네임"
                onChange={onChange}
                value = {nickname}
            />
            <button
                onClick={onReset}
            >
                초기화
            </button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default InputSample;