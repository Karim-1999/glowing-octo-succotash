import React from "react";
import { ClickCounter } from "./components/ClickCounter";
import { Welcome } from "./components/Welcomef";
import { Route, Routes } from 'react-router-dom';


export class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Welcome name='Jimmy'/>} />
          <Route path="/counter" element={<ClickCounter />} />
        </Routes>
      </>
    );
  }
}  

/* console.log(Welcome) */