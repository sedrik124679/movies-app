import {useState, useEffect} from "react";
import API from "../API";

export const useActorFetch = actorId => {

    const [state, setState] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {

        const fetchActor = async () => {
            try {
                setLoading(true)
                setError(false)

                const actorMovies = await API.getFilmsFromActor(actorId)
                const detailsAboutActor = await API.getDetailsAboutActor(actorId)
                const actorLinks = await API.getLinksOnActor(actorId)

                setState({
                    ...detailsAboutActor,
                    ...actorMovies,
                    links: {...actorLinks}
                })

                setLoading(false)
            } catch (error) {
                setError(true)
            }
        }

        // const sessionState = isPersistedState(actorId)
        //
        // if (sessionState) {
        //     setState(sessionState)
        //     setLoading(false)
        //     return;
        // }

        fetchActor()

    }, [actorId])

    useEffect(() => {
        localStorage.setItem(actorId, JSON.stringify(state))
    }, [actorId, state])
    return {state, loading, error}
}