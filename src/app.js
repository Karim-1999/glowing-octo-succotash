import React from "react";
import { ClickCounter } from "./components/ClickCounter";
import { ClickTracker } from "./components/ClickTracker";
import Container from "./components/Container";
import { Counter } from "./components/Counter";
import { Hello } from "./components/hello";
import { InteractiveWelcome } from "./components/InteractiveWelcome";
import { LanguageContext } from "./components/LanguageContext";
import { Login } from "./components/Login.js";
import { Sum } from "./components/Sum";
import TodoList from "./components/ToDoList";
import UncontrolledLogin from "./components/UncontrolledLogin";

import { Welcome } from "./components/welcome";
import { Welcomef } from "./components/Welcomef";


var name="John"




export class App extends React.Component{


  state = {
    language: 'en'
  }
  
  handleLenguageChange = (event) => {
    this.setState({
        language: event.target.value
    })
  }


  render(){
    return(
      <div>
        <select value={this.state.language} onChange={this.handleLenguageChange}>
        <option value='en'>English</option>
        <option value='it'>Italiano</option>
      </select>
        <LanguageContext.Provider value={this.state.language}>
        
        <Hello />
        <Welcome name={name} age={22} />
        <Counter initialCount={ 1 } incrementAmount={ 1 } incrementInterval={ 500 } />
        <ClickCounter />
        <ClickTracker /> 
        <InteractiveWelcome /> 
        <UncontrolledLogin /> 
        <Container title='TITOLO molto grand e carino' />
        <TodoList
            render = 
            {(items, newState, deleteState) => {
              const Copy = [...items.items];
              return (
                <ul className="list">
                  {Copy.map((el, i) => (
                    <div key={i}>
                      <li>
                        {el}
                        <button
                          onClick={() => {
                            deleteState(Copy, i);
                            newState(Copy);
                          }}
                        >
                          Delete
                        </button>
                      </li>
                    </div>
                  ))}
                </ul>
              );
            }}
            setState=""
          />
        <Login />
        </LanguageContext.Provider>
        <Welcomef /> 
        <Sum numbers = {[1,2,3,4,5,6,7 ]}/>
        </div> 
      
    );
  }
}
   

/* console.log(Welcome) */