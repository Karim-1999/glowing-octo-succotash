import React from "react";
import { ClickCounter } from "./components/ClickCounter";
import { Welcome } from "./components/Welcomef";
import { Route, Routes } from 'react-router-dom';
import { ShowGithubUser } from "./components/ShowGithubUser";
import { Link } from "react-router-dom";
import { GithubUserList } from "./components/GithubUserList";
import { GithubUser } from "./components/GithubUser";



export function App() {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/Login">Login</Link>
        <Link to="/">Back</Link>
      </div>
      <Routes>
        <Route path="/" element={<Welcome name="Jimmy" />} />
        <Route path="/counter" element={<ClickCounter />} />
        <Route path="/users" element={<GithubUserList />}>
          <Route path="/:username" element={<ShowGithubUser />} />
          <Route index element={<h3>Add a user and select it</h3>} />
        </Route>
        <Route path="users" element={<GithubUser />} />
        <Route
          path="*"
          element={
            <div>
              <p>Not Found!</p>
            </div>
          }
        />
      </Routes>
    </>
  );
}  

/* console.log(Welcome) */