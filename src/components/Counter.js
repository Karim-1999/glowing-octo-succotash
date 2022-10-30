import React from "react";
import { CounterDisplay } from "./CounterDisplaay";


export class Counter extends React.Component{

state = {
    count : this.props.initialCount
}

componentDidMount(){
    setInterval(() => {
    this.setState((state)=>{
        return {
    
          count: (state.count + this.props.incrementAmount) > (this.props.initialCount * 10) 
            ? this.props.initialCount   
            : state.count + this.props.incrementAmount
        }
    })
    }, this.props.incrementInterval)
}
render(){
    return <CounterDisplay content={ this.state.count} />
}
}

// IL COSTROTTURE NON È NECCESSARIO I QUESTO CASO 

Counter.defaultProps = {
    initialCount: 0,
    incrementAmount: 1,
    incrementInterval: 1000
}