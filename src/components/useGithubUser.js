import { useEffect, useState } from "react";

export function useGithubUser(username) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function fetchGithubUser(username) {
        setLoading(true)
        setError(false)

    try {
        const response = await fetch(`https://api.github.com/users/${username}`)
        const json = await response.json()
        setUser(json)
    } 
    
    catch (error) {
        setError(error)
        setUser(null)
    }
    
    finally {
    setLoading(false)
    }
}

useEffect(() => {
    fetchGithubUser(username)
}, [username])

return { user, error, loading, onFetchUser: fetchGithubUser
}
}