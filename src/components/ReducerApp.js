import React, {useCallback, useReducer, useRef} from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function counterActiveUsers(users){
    console.log('ReducerApp 활성 사용자 수를 세는중  ...');
    return users.filter(user => user.active).length;
}

const initialState = {
    inputs: {
        username: '',
        email: ''
    },
    users: [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false
        }
    ]
};

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name] : action.value
                }
            };
        case 'CREATE_USER':
            return {
                inputs: initialState.inputs,
                users: state.users.concat(action.user)
            }
        default:
            return state;
    }
}

function ReducerApp() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { users } = state;
    const { username, email } = state.users;
    const nextId = useRef(4);

    const onChange = useCallback(e => {
        const {name, value} = e.target;
        dispatch({
            type: 'CHANGE_INPUT',
            name,
            value
        });
    },[])

    const onCreate = useCallback(() => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email
            }
        });
        nextId.current += 1;
    }, [username, email]);

    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList
                users = {users}
            />
            <div> 활성사용자 수: 0</div>
        </>
    )
}

export default ReducerApp;