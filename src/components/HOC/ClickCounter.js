import withCounter from './withCounter'

const ClickCounter = ({count, incrementCount}) => {
  return (
    <button onClick={incrementCount}>Clicked {count} times</button>
  )
}

export default withCounter(ClickCounter)