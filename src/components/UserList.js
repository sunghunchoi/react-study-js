import React, {useEffect} from 'react';

function User({ user, onRemove, onToggle }) {
    // userEffect 라는 Hook 을 사용하여 컴포넌트가
    // 마운트 됐을 때 (처음 나타났을 때)
    // 언마운트 됐을 때( 사라질때 )
    // 업데이트 될 때 (특정 props 가 바뀔 때)
    // 핸들링 하기.
    // useEffect 안에서 사용하는 상태나 props 를 deps 에 넣지 않게 된다면
    // useEffect 에 등록한 함수가 실행 될 때 최신 props 상태를 가르키지 않게 됨.
    useEffect(() => {
        console.log('user 값이 설정됨.');
        console.log(user)
        return () => {
            console.log('user가 바뀌기전')
            console.log(user);
        };
    },[user]);

    // deps 파라미터를 생략한다면, 컴포넌트가 리렌더링 될 때마다 호출됨.
    // useEffect(() => {
    //     console.log(user)
    // })

    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({users, onRemove, onToggle}) {
    return (
        <div>
            {users.map((user, index) => (
                    <User
                    // 리액트에서 배열을 렌더링 할 때에는 key 라는 props 를 설정해야함.
                    // key 값은 각 원소들마다 가지고 있는 고유값으로 설정.
                    // 만약 배열안의 고유값이 없다면 map() 의 두번째 콜백함수 파라미터 index 를 사용하면 됨.
                    // key 가 있어야만 배열이 업데이트 될 때 효율적으로 렌더링 될 수 있기 때문.
                        key={index}
                        user={user}
                        onRemove={onRemove}
                        onToggle={onToggle}
                    />
                )
            )}
        </div>
    );
}

export default React.memo(UserList);