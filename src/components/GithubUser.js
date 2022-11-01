import { useSWR } from "swr";

const fetcher = (url) => fetch(url).then((respons) => respons.json())

export function GithubUser() {
    const { data, error, isLoading, onRefresh } = useSWR(`https://api.github.com/users`, fetcher)
    return (
        <div>
            <button onClick={onRefresh}>Refresh</button>
        {isLoading && <h3>Loading...</h3>}
        {error && <h3>An error has occurred</h3>}
        {data && !error && (
        <ul>
          {data.map((user) => (
            <li key={user.login}>{user.login}</li>
            ))}
            </ul>
        )}
        </div>
        
        )
    }