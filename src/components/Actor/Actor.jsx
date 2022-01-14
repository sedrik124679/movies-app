import React from 'react';
import PropTypes from 'prop-types'

// Styles
import {Wrapper, Image} from "./Actor.styles";
import {Link} from "react-router-dom";

const Actor = ({name, character, imageUrl, clickable, actorId}) => {
    return (
        <Wrapper>
            {clickable ? (
                <Link to={`/actor/${actorId}`}>
                    <Image src={imageUrl} alt='actor-thumb'/>
                    <h3>{name}</h3>
                    <p>{character}</p>
                </Link>
            ) : null
            }
        </Wrapper>
    );
};

Actor.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    imageUrl: PropTypes.string
}

export default Actor;