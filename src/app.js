import React from "react";
import { ClickCounter } from "./components/ClickCounter";
import { Welcome } from "./components/Welcomef";
import { Route, Routes } from 'react-router-dom';
import { ShowGithubUser } from "./components/ShowGithubUser";
import { Link } from "react-router-dom";



export class App extends React.Component {
  render() {
    return (
      <>
        
        <div>
          <Link to="/">Home</Link>
          <Link to="/Login">Login</Link>
          <Link to="/">Back</Link>
        </div>
        <Routes>
          <Route path="/" element={<Welcome name="Jimmy"/>} />
          <Route path="/counter" element={<ClickCounter />} />
          <Route path="/:username" element={<ShowGithubUser />} />
        </Routes>
      </>
    );
  }
}  

/* console.log(Welcome) */