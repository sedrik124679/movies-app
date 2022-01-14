import {useEffect, useState} from "react";

import API from "../API";

export const useMovieRatingFetch = (accountId, sessionId) => {

    const [state, setState] = useState({})
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchRating = async () => {
            try {
                setError(false)
                setLoading(true)

                const movieRatingsInfo = await API.getRateOfMovies(accountId, sessionId)

                setState({
                    ...movieRatingsInfo
                })

                setLoading(false)
            } catch (error) {
                setError(true)
            }
        }
        fetchRating()
    }, [accountId, sessionId])

    return {state, loading, error}
}