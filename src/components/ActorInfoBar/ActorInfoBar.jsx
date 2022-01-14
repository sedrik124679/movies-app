import React from 'react';
import {Content, Wrapper} from "./ActorInfoBar.styles";
import PropTypes from "prop-types";

const ActorInfoBar = ({links}) => {
    return (
        <Wrapper>
            <Content>
                {links.imdb_id &&
                <div className="column">
                    <p><a href={`https://www.imdb.com/name/${links.imdb_id}`} target='_blank'>IMDB profile</a></p>
                </div>
                }
                {links.instagram_id &&
                <div className="column">
                    <p><a href={`https://www.instagram.com/${links.instagram_id}`} target='_blank'>Instagram profile</a>
                    </p>
                </div>
                }
                {links.twitter_id &&
                <div className="column">
                    <p><a href={`https://twitter.com/${links.twitter_id}`} target='_blank'>Twitter profile</a></p>
                </div>
                }
                {links.facebook_id &&
                <div className="column">
                    <p><a href={`https://facebook.com/${links.twitter_id}`} target='_blank'>Facebook profile</a></p>
                </div>
                }
            </Content>
        </Wrapper>
    );
};

ActorInfoBar.propTypes = {
    links: PropTypes.object
}

export default ActorInfoBar;