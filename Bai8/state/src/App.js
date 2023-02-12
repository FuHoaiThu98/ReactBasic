import React, {useState} from 'react';

function App() {
  const [color, setColor] = useState('white');
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <p>{color}</p>
      <button onClick={() => setColor('black')}>Change to black</button>
      <button onClick={() => setColor('white')}>Change to white</button>
      <p>{count}</p>
      <button onClick={() => setCount(data => data + 1)}>increase</button>
    </div>
  );
}

export default App;
