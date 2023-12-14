import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const hanldleClick = () => {
    setCount((prev) => prev + 1)
  }
  return (
    <div className="App" style={{ dislapy: 'flex' }}>
      <div>Testing App</div>
      <div>Count= {count}</div>
      <button onClick={() => hanldleClick()}>Submit</button>
    </div>
  );
}

export default App;
