import {useEffect, useState} from "react";
import API from "../API";

export const useAccountIdFetch = sessionId => {

    const [state, setState] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchProfile = async () => {
            try{

                setLoading(true)
                setError(false)

                const accountInfo = await API.getAccountId(sessionId)

                setState({
                    ...accountInfo
                })

                setLoading(false)

            } catch (error) {
                setError(true)
            }
        }
        fetchProfile()
    }, [sessionId])
    return {state, loading, error}
}