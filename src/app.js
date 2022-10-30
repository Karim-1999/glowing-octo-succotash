import React from "react";
import { ClickCounter } from "./components/ClickCounter";
import { ClickTracker } from "./components/ClickTracker";
import { Counter } from "./components/Counter";
import { Hello } from "./components/hello";
import { InteractiveWelcome } from "./components/InteractiveWelcome";
import { Welcome } from "./components/welcome";


var name="John"


export class App extends React.Component{
  render(){
    return(
      <div>
        <Hello />
        <Welcome name={name} age={22} />
        <Counter initialCount={ 1 } incrementAmount={ 1 } incrementInterval={ 500 } />
        <ClickCounter />
        <ClickTracker /> 
        <InteractiveWelcome/> 
      </div>
    )
  }
}

/* console.log(Welcome) */