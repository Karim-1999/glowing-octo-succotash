import React from "react";
import reactDOM from "react-dom";

const root = reactDOM.createRoot(document.querySelector("#root"));
export default class TodoList extends React.Component {
  state = {
    items: [
      "colazione",
      "fare spesa",
      "chiamare il dottore",
      "pranzo",
      "coding",
      "cena",
      "film",
    ],
    newItems: "",
  };

  addEvent = () => {
    this.setState({
      items: [...this.state.items, this.state.newItems],
      newItems: "",
    });
  };

  addItem = (event) => {
    this.setState({
      newItem: event.target.value,
    });
  };

  resetAll = () => {
    this.setState({
      items: [""],
    });
  };

  newState = (array) => {
		this.setState({
			items : array
		})
	}

	deleteState = (array,i) => {
		array.splice(i,1)
	  }

  render() {
    return (
      <div>
        <h1>Cose da fare:</h1>
        <ul>
          
           {this.props.render(this.state, this.newState, this.deleteState)}
        </ul>
        <input type="text" onChange={this.addItem} value={this.state.newItem} />
        <button onClick={this.addEvent} disabled={!this.state.newItems}>
          Aggiungi altro
        </button>
        <button onClick={this.resetAll}>RESET!</button>
      </div>
    );
  }
}

root.render(<TodoList />);
