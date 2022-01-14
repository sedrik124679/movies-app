import React, {useContext, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import API from '../../API'

// Components
import Button from "../Button/Button";

// Styles
import {Wrapper} from "./Login.styles";

// Context
import {Context} from "../../context";

const Login = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const [user, setUser] = useContext(Context)
    const navigate = useNavigate()

    const handleSumbit = async () => {
        setError(false)
        try {

            const requestToken = await API.getRequestToken();
            const sessionId = await API.authenticate(
                requestToken, userName, password
            )
            setUser({ sessionId: sessionId.session_id, username: userName })

            navigate('/');

        } catch (error) {
            setError(true)
        }
    }

    const handleInput = (event) => {
        const name = event.currentTarget.name;
        const value = event.currentTarget.value;

        if(name === 'userName') setUserName(value)
        if(name === 'password') setPassword(value)
    }

    return (
        <Wrapper>
            {error && <div className='error'>Incorrect login or password</div>}
            <label>Username:</label>
            <input
                type="text"
                value={userName}
                name='userName'
                onChange={handleInput}
            />
            <input
                type="password"
                value={password}
                name='password'
                onChange={handleInput}
            />
            <Button text='Login' callback={handleSumbit} />
            <a style={{textDecoration: 'none', color: 'black'}} href='https://www.themoviedb.org/signup' target='_blank'>Немає
                аккаунта?</a>
        </Wrapper>
    );
};

export default Login;