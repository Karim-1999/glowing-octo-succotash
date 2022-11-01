import { useState, useEffect } from "react";

export function GithubUser({ username }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    if (!username) {
      return;
    }
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (response.status !== 200) {
          setError(new Error(`User ${username} not found`));
        }
        return response.json();
      })

      .then((json) => {
        console.log(json);
        setUser(json);
      })

      .catch((error) => {
        setError(error);
      })

      .finally(() => {
        setLoading(false);
      });
  }, [username]);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>There has been an error: {error.message}</h1>}
      <h1>{user?.name}</h1>
      <p>{user?.login}</p>
    </div>
  );
}