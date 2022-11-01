import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
const { user, loading, error, onFetchUser } = useGithubUser(username);

return (
    <div onChange={onFetchUser}>
    {loading && <h1>Loading...</h1>}
    {error && <h1>There has been an error: {error.message}</h1>}
    {user && <h1>{user.name}</h1>}
    </div>
);
}