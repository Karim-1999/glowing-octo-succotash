import React from "react";
import {  Buttons } from "./Buttons";
import { CounterDisplay } from "./CounterDisplay";

export class ClickCounter extends React.Component {
  
  state = {
    count: this.props.initialCount,
  }

  handleCounterIncrement = () => {
    this.setState((state) => {
      return {
        count: state.count + this.props.incrementAmount
      }
    })
  }
  
  render() {
    return(
      <div>
        <CounterDisplay content = { this.state.count } />
        <Buttons onClick = { this.handleCounterIncrement }>Aumenta il Counter</Buttons>
      </div>
    )
  }
}

ClickCounter.defaultProps = {
  initialCount: 0,
  incrementAmount: 1
}