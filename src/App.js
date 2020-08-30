import React, {useRef, useState, useMemo, useCallback} from 'react';
import Hello from "./components/Hello";
import Wrapper from "./components/Wrapper";
import Counter from "./components/Counter";
import InputSample from "./components/InputSample";
import UseRefInputSample from "./components/UseRefInputSample";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import CounterUseReducer from "./components/CounterUseReducer";
import ReducerApp from "./components/ReducerApp";

function App() {
  // const name = 'Hello React'
  // const style = {
  //   backgroundColor: 'black',
  //   color: 'aqua',
  //   fontSize: 24,
  //   padding: '1rem'
  // }

    function countActiveUsers(users) {
        console.log('활성 사용자 수를 세는중 ...')
        return users.filter(user => user.active).length;
    }

    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    });

    const { username, email } = inputs;

    // const onChange = e  => {
    //     const { name , value } = e.target;
    //     setInputs({
    //         ...inputs,
    //         [name] : value
    //     });
    // };

    // useCallback 사용시 주의점 :  함수 안에서 사용하는 상태 혹은 props 가 있다면 꼭, deps 배열안에 포함시켜야 됨.
    // 안넣으면, 함수 내에서 해당 값들을 참조할 때 가장 최신 값을 참조 할 것이라고 보장 할 수 없음.
    // 또한 props 로 받아온 함수가 있다면 이 또한 deps 에 넣어야함.
    const onChange = useCallback(e => {
        const {name,value} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        });
    },
        [inputs]
    );

    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true,
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false,
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false,
        }
    ])

    const nextId = useRef(4);
    const onCreate = useCallback(() => {
        const user = {
            id: nextId.current,
            username,
            email
        };
        setUsers(users.concat(user))
        setInputs({
            username: '',
            email: ''
        });
        nextId.current += 1;
    }, [username, email]);

    // const onCreate = () => {
    //     const  user = {
    //         id: nextId.current,
    //         username: username,
    //         email: email
    //     };
    //
    //     // 배열에  새  항목을 추가할때에는 이렇게 spread 연산자를 사용하거나, concat 을 사용.
    //     // setUsers([...users, user]);
    //     setUsers(users.concat(user));
    //     setInputs({
    //         name: '',
    //         email: ''
    //     })
    //     nextId.current += 1;
    // }

    // const onRemove = id => {
    //     // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬.
    //     // user.id 가 id 인 것을 제거함.
    //     setUsers(users.filter(user => user.id !== id));
    // }
    const onRemove = useCallback(id => {
        setUsers(users.filter(user => user.id !== id))
    }, [])

    // const onToggle = id => {
    //     setUsers(users.map(user => user.id ===  id ? {...user, active: !user.active} :  user))
    // }
    const onToggle = useCallback(id => {
        setUsers(users.map(user =>
            user.id === id ? {...user, active: !user.active} : user
        ))
    }, [])

    const count = useMemo(() => countActiveUsers(users), [users])
  return (
      <Wrapper>
        {/*<Hello*/}
        {/*    name="react"*/}
        {/*    color="red"*/}
        {/*    isSpecial = {true}*/}
        {/*/>*/}
        {/*<Hello*/}
        {/*    color="pink"*/}
        {/*  />*/}
        {/*<Hello/>*/}
        {/*<div style={style}>{name}</div>*/}
        {/*<Counter />*/}
        {/*<InputSample />*/}
        {/*<UseRefInputSample/>*/}
        {/*<CreateUser*/}
        {/*    username={username}*/}
        {/*    email={email}*/}
        {/*    onChange={onChange}*/}
        {/*    onCreate={onCreate}*/}
        {/*/>*/}
        {/*<UserList*/}
        {/*    users={users}*/}
        {/*    onRemove = {onRemove}*/}
        {/*    onToggle = {onToggle}*/}
        {/*/>*/}
        {/*<div>활성 사용자 수: {count}</div>*/}
        {/*<CounterUseReducer />*/}
        <ReducerApp />
      </Wrapper>
  );
}

export default App;
