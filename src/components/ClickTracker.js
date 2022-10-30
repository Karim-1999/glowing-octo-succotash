import React from "react";

import { Buttons } from "./Buttons";

export class ClickTracker extends React.Component{

state = {
    lastPressed: <></>
}

tracker = (event) => {
    this.setState({
    lastPressed: event.target.innerHTML
    })
}

render(){
    return(
    <div>
        <Buttons clickHandler = { this.tracker } text='Uno' />
        <Buttons clickHandler = { this.tracker } text='Due' />
        <Buttons clickHandler = { this.tracker } text='Tre' />
        <h1>Last clicked: { this.state.lastPressed }</h1>
    </div>
    )
}
}