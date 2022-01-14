import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Styles
import {Wrapper, Content} from './BreadCrumb.styles'

const BreadCrumb = ({ movieTitle, actorName }) => {
    return (
        <Wrapper>
            <Content>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <span>Home</span>
                </Link>
                <span>|</span>
                <span>{ movieTitle || actorName}</span>
            </Content>
        </Wrapper>
    );
};

BreadCrumb.propTypes = {
    movieTitle: PropTypes.string
}

export default BreadCrumb;