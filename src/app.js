import React from "react";
import { ClickCounter } from "./components/ClickCounter";

import { LoginForm } from "./components/Login.js";
import { Sum } from "./components/Sum";


import { Welcomef } from "./components/Welcomef";






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
        
       <LoginForm />
        <Welcomef /> 
        <Sum numbers = {[1,2,3,4,5,6,7 ]}/>
        <Sum />
        <ClickCounter />
        </div> 
      
    );
  }
}
   

/* console.log(Welcome) */