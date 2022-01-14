import React, {useContext, useEffect} from 'react';
import {Context} from "../../context";
import {useAccountIdFetch, useProfileFetch} from "../../hooks/useProfileFetch";
import {useMovieRatingFetch} from "../../hooks/useMovieRatingFetch";
import Spinner from "../Spinner/Spinner";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import {averageRating} from "../../helpers";

const Profile = () => {

    const [user] = useContext(Context)
    console.log(user)
    let sessionId;
    if (user !== undefined) {
        sessionId = user.sessionId
    }
    const {state: accountInfo} = useAccountIdFetch(sessionId)
    console.log(accountInfo)
    const {state: ratingProfile, error, loading} = useMovieRatingFetch(accountInfo.id, sessionId)
    // const filmsArray = ratingProfile.results
    // console.log(filmsArray)
    //
    // const average = averageRating(filmsArray)
    if (loading) return <Spinner/>
    if (error) return <div>Something went wrong...</div>
    console.log(ratingProfile)

    return (
        <div>
            {user && (
                <>
                    <BreadCrumb actorName={user.username}/>
                    <ProfileInfo profileInfo={accountInfo.avatar}
                                 lengthRate={ratingProfile.results.length}
                                 name={user.username}
                                 />
                </>
            )}
        </div>
    );
};

export default Profile;