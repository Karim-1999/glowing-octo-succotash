import React from "react";
import reactDOM from 'react-dom';

const root = reactDOM.createRoot(document.querySelector('#root'))
export default class TodoList extends React.Component {
    state = {
        items : ['colazione', 'fare spesa', 'chiamare il dottore', 'pranzo', 'coding', 'cena', 'film'],
        newItems :  ``
    }

    addEvent = () => {
        this.setState({
            items: [...this.state.items, this.state.newItems],
                newItems  : ``  
        })
    }

    addItem = (event) => {
        this.setState({
            newItem : event.target.value
        })
    }

render() {
    return(
        <>
        <div>
            <h1>Cose da fare:</h1>
            <ul>
                {  this.state.items.map((el,i) => <li key={el+i}>{el}</li>)}
            </ul>
            <input type='text' onChange={this.addItem} value={this.state.newItem} />
            <button onClick={this.addEvent}>Aggiungi altro</button>
        </div>

        </>
    )
}
}

root.render(<TodoList />)