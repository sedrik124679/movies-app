import React, {useContext} from 'react';
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import {Wrapper, Content, LogoImg, TMDBLogoImg} from "./Header.styles";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

// Context
import {Context} from "../../context";


const Header = () => {

    const [user] = useContext(Context);
    const [exit, setExit] = useContext(Context)
    const navigate = useNavigate()

    const exitFromAccount = () => {
        setExit(undefined)
        alert('exit from account')
    }

    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg src={RMDBLogo} alt='rmdb-logo' />
                </Link>

                {user ? (
                    <>
                        <Link to='/profile'>Profile</Link>
                        <span>Logged in as: {user.username}</span>
                        <Link to='/' onClick={exitFromAccount}>Exit</Link>
                    </>
                ) : (
                    <Link to='/login'>
                        <span>Login</span>
                    </Link>
                )
                }

                <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo'/>
            </Content>
        </Wrapper>
    );
};

export default Header;