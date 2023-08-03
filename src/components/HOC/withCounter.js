import { useState } from 'react';

const withCounter = (OriginalComponent) => {
  function NewComponent() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount((prevCount) => prevCount + 1)
    }
    
    return <OriginalComponent count={count} incrementCount={incrementCount}/>;
  }
  return NewComponent;
}

export default withCounter