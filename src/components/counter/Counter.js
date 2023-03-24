import './counterStyle.css'

const Counter = ({count, id, increment, decrement}) => {
  return (
    <div className='myCounter'>
      <h1>{count}</h1>
      <div className="btns">

        <button onClick={() => decrement(id)}>decrement</button>
        <button onClick={() => increment(id)}>increment</button>
      </div>
    </div>
  )
}

export default Counter;