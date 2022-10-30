import React from "react";

export class Buttons extends React.Component{
  render(){
    return <button onClick = { this.props.clickHandler }>{ this.props.text }</button>
  }
}

Buttons.defaultProps = {
  clickHandler : () => {console.log('')},
  text: 'Cliccami 1'
}