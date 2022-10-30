import React from "react";
import { CounterDisplay } from "./CounterDisplay";


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
    
    componentDidUpdate(){
        if (this.state.count > this.props.initialCount * 10){
        this.setState(()=>{
            return {
            count: this.props.initialCount
            }
        })
        }
    }
    
    componentWillUnmount(){
        if(this._interval){
        clearInterval(this._interval);
        }
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