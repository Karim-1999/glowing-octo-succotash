import React from "react";
import { ClickCounter } from "./components/ClickCounter";
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
        <Counter initialCount={ 1 } incrementAmount={ 1 } incrementInterval={ 500 } />
        <ClickCounter/>
      </div>
    )
  }
}

/* console.log(Welcome) */