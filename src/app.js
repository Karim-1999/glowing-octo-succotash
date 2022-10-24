import React from "react";
import { Hello } from "./components/hello";
import { Welcome } from "./components/welcome";


var name="Karim"


export class App extends React.Component{
  render(){
    return(
      <div>
        <Hello />
        <Welcome name={ <strong>{name}</strong>  } age={22} />
      </div>
    )
  }
}

/* console.log(Welcome) */