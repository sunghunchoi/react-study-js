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
            // ... 문법은 spread 문법 .
            // 객체의 내용을 모두 펼처서 기존 객체를 복사해줌.
            // 불변성을 지키기 위해서.
            ...inputs,    // 기존의 input 객체를 복사한 뒤
            [name] : value //  name 키를 가진 값을 value 로 설정.
        })
    };

    // 리액트에서 객체를 업데이트하게 될 때에는 기존 객체를 직접 수정하면 안되고.
    // 새로운 객체를 만들어서, 새 객체에 변화를 주어야 컴포넌트에 반영이 됨.
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