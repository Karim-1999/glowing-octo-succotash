import React from "react";
import { ClickCounter } from "./components/ClickCounter";
import { ClickTracker } from "./components/ClickTracker";
import Container from "./components/Container";
import { Counter } from "./components/Counter";
import { Hello } from "./components/hello";
import { InteractiveWelcome } from "./components/InteractiveWelcome";
import { Login } from "./components/Login.js";
import TodoList from "./components/ToDoList";
import UncontrolledLogin from "./components/UncontrolledLogin";

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
        <InteractiveWelcome /> 
        <Login />
        <UncontrolledLogin /> 
        <TodoList /> 
        <Container  title='TITOLO molto grand e carino' /> 
      </div>
    )
  }
}

/* console.log(Welcome) */