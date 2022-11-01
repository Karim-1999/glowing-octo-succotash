import { useState, useEffect } from 'react';

export function ClickCounter({initialValue = 0}) {

  const [count, setCount] = useState(initialValue)

  useEffect(() => {
    console.log(`The counter is now ${count}`)
  }, [count])

  function handleCounterIncrement() {
    setCount((c) => c + 1)
  }

    return (
      <div>
      <h1>Count : {count}</h1>
      <button onClick = {()=>handleCounterIncrement()}>Increment</button>
      </div>
    )
  }