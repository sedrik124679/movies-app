import React from 'react';
import {useParams} from "react-router-dom";
import {useActorFetch} from "../../hooks/useActorFetch";
import Spinner from "../Spinner/Spinner";
import Grid from "../Grid/Grid";
import Thumb from "../Thumb/Thumb";
import {IMAGE_BASE_URL, POSTER_SIZE} from "../../config";
import NoImage from '../../images/no_image.jpg'
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import ActorInfo from "../ActorInfo/ActorInfo";
import ActorInfoBar from "../ActorInfoBar/ActorInfoBar";

const ActorPage = () => {

    const {actorId} = useParams()

    const {state: actor, loading, error} = useActorFetch(actorId)

    if (loading) return <Spinner/>
    if (error) return <div>Something went wrong...</div>

    return (
        <>
            <BreadCrumb actorName={actor.name}/>
            <ActorInfo actor={actor}/>
            <ActorInfoBar links={actor.links}/>
            <Grid header={actor.name ? `Movies with ${actor.name}` : null}>
                {actor.cast.map(movie => {
                    return (
                        <Thumb
                            key={movie.id}
                            clickable={true}
                            image={movie.poster_path
                                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                                : NoImage
                            }
                            movieId={movie.id}
                        />
                    )
                })}
            </Grid>
        </>
    );
};

export default ActorPage;