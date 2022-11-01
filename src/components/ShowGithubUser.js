import { Link } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export function ShowGithubUser() {
  return (
    <div>
      <GithubUser username="Nenny96" />
      <Link to="/">Back</Link>
    </div>
  );
}

