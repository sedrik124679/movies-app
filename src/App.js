import React, {useContext} from 'react';

//Routing
import {BrowserRouter, Redirect, Route, Routes} from "react-router-dom";

// Styles
import {GlobalStyle} from "./GlobalStyle";

// Components
import Home from './components/Pages/Home'
import Header from "./components/Header/Header";
import Movie from "./components/Pages/Movie";
import NotFound from "./components/Pages/NotFound";
import Login from "./components/Pages/Login";
import ActorPage from "./components/Pages/ActorPage";
import Profile from "./components/Pages/Profile";

// Context
import UserProvider from "./context";

function App() {
    return (
        <BrowserRouter>
            <UserProvider>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/:movieId' element={<Movie /> } />
                    <Route path='/profile' element={<Profile /> } />
                    <Route path='/*' element={<NotFound />} />
                    <Route path='/actor/:actorId' element={<ActorPage />} />
                </Routes>
                <GlobalStyle />
            </UserProvider>
        </BrowserRouter>
    );
}

export default App;
