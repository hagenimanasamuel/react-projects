import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count changed to:', count);
  }, [count]);

  return (
    <>
      <p>Let's test something in react!</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Subtract</button>
    </>
  )

}

export default App
