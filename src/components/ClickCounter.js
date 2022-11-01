import React from 'react';
import { useCounter } from './useCounter';
import { Link } from 'react-router-dom';


export function ClickCounter({ initialValue = 0 }) {
    const { counter, onIncrement, onDecrement, onReset } =
      useCounter(initialValue);
  
      return (
          <div>
                <Link to="/">Go to Welcome</Link> 
        <h1>Count : {counter}</h1>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={onReset}>Reset</button>
        </div>
      )
    }