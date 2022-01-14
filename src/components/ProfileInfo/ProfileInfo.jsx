import React from 'react';
import {Wrapper, Content, Text} from "./ProfileInfo.styles";
import {IMAGE_BASE_URL, PROFILE_SIZE} from "../../config";
import Thumb from "../Thumb/Thumb";
import NoImage from "../../images/no_image.jpg";

const ProfileInfo = ({profileInfo, lengthRate, name, averageRating}) => {
    return (
        <Wrapper>
            <Content>
                {profileInfo
                    ? <>
                        <Thumb
                            image={profileInfo.tmdb.avatar_path
                                ? `${IMAGE_BASE_URL}${PROFILE_SIZE}${profileInfo.tmdb.avatar_path}`
                                : NoImage
                            }
                            clickable={false}/>
                        <Text>
                            <h1>Профіль: {name}</h1>
                            <h3>Всього оцінок: {lengthRate}</h3>
                            <h4>Середня оцінка фільму: {averageRating}</h4>
                        </Text>
                        </>
                    : null
                }
            </Content>
        </Wrapper>
    );
};

export default ProfileInfo;