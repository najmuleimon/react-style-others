import React from 'react'
import { useState } from 'react'
import Counter from './Counter';

const initialState = [
  {
    id: 1,
    count: 0
  }, 
  {
    id: 2,
    count: 0
  }
]
const MyCounter = () => {
  const [state, setState] = useState(initialState);

  const totalCount = () => {
    return state.reduce((total, counter) => total + counter.count, 0);
  }

  const increment = (id) => {
    const updateCounter = state.map(c => {
      if(c.id === id){
        return {...c, count : c.count + 1}
      }
      return {...c}
    });
    setState(updateCounter);
  }

  const decrement = (id) => {
    const updateCounter = state.map(c => {
      if(c.id === id){
        return {...c, count : c.count - 1}
      }
      return {...c}
    });
    setState(updateCounter);
  }
  return (
    <div>
      {
        state.map((count) => (
          <Counter key={count.id} id={count.id} count={count.count} increment={increment} decrement={decrement}/>
        ))
      }
      <div className="total">

        Total Count <h1>{totalCount()}</h1>
      </div>
    </div>
  )
}

export default MyCounter;