import React from 'react';
import { useState, useEffect } from "react";
import { CounterDisplay } from './CounterDisplay';


export function Count({
  initialValue = 0,
  increment = 1,
  interval = 1000,
}) {
  const [count, setCount] = useState(initialValue)
  var t

  useEffect(() => {
    counterMount()
    return () => {
      clearInterval(t)
    };
  }, [])

  function counterMount() {
    t = setInterval(() => {
         setCount(count => count + increment)
     }, interval)
 }

 return <CounterDisplay count={count} />
}