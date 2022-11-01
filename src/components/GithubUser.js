import { useSWR } from "swr";

const fetcher = (url) => fetch(url).then((respons) => respons.json())

export function GithubUser() {
    const { data, error, isLoading } = useSWR(`https://api.github.com/users`, fetcher)
    return (
        <div>
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