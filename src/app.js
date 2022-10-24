import React from "react";
import { Hello } from "./components/hello";
import { Welcome } from "./components/welcome";


var name="Karim"


export class App extends React.Component{
  render(){
    return(
      <div>
        <Hello />
        <Welcome name={name} age={22} />
      </div>
    )
  }
}

/* console.log(Welcome) */