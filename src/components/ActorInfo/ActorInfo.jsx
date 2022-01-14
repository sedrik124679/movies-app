import React from 'react';
import {Content, Text, Wrapper} from "./ActorInfo.styles";
import Thumb from "../Thumb/Thumb";
import {ACTOR_SIZE, IMAGE_BASE_URL, POSTER_SIZE} from "../../config";
import NoImage from "../../images/no_image.jpg";
import PropTypes from "prop-types";


const ActorInfo = ({actor}) => {
    return (
        <Wrapper>
            <Content>
                <Thumb
                    image={actor.profile_path
                        ? `${IMAGE_BASE_URL}${ACTOR_SIZE}${actor.profile_path}`
                        : NoImage
                    }
                    clickable={false}/>
                <Text>
                    <h1>{actor.name}</h1>
                    <h3>Birthday: {actor.birthday}</h3>
                    <h3>Place of birth: {actor.place_of_birth}</h3>
                    <h3>Biography:</h3>
                    <p>{actor.biography}</p>
                </Text>
            </Content>
        </Wrapper>
    );
};

ActorInfo.propTypes = {
    actor: PropTypes.object
}

export default ActorInfo;