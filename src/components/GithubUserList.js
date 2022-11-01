import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function GithubUserList() {
  const [user, setUser] = useState([]);
  const [input, setInput] = useState("");

  function handleInputChange(event) {
    setInput(event.target.value);
  }
  function handleAdd() {
    setUser([...user, input]);
  }
  function handleRemove() {
    setUser(user.slice(0, -1));
  }

  return (
    <div>
      <ul>
        {user.map((value, index) => (
          <li key={value + index}>
              <Link to={`${value}`}>GithubUser: {value} </Link>
          </li>
        ))}
          </ul>
          <Outlet/> 
      <input name="username" onChange={handleInputChange}></input>
      <button onClick={handleAdd}>Add new user</button>
      <button onClick={handleRemove}>Remove user</button>
    </div>
  );
}