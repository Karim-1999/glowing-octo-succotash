import React from "react";
import { Counter } from "./components/Counter";
import { Hello } from "./components/hello";
import { Welcome } from "./components/welcome";


var name="John"


export class App extends React.Component{
  render(){
    return(
      <div>
        <Hello />
        <Welcome name={name} age={22} />
        <Counter/>
      </div>
    )
  }
}

/* console.log(Welcome) */