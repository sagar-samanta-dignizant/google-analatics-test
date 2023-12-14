import './App.css';
import { useState } from 'react';
import ReactGA from 'react-ga'

ReactGA.initialize("G-ZL9VZME60B")

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname
})
function App() {
  const [count, setCount] = useState(0)
  const hanldleClick = () => {
    setCount((prev) => prev + 1)
  }
  return (
    <div className="App" style={{ dislapy: 'flex' }}>
      <div>Testing App 2</div>
      <div>Count= {count}</div>
      <button onClick={() => hanldleClick()}>Increse</button>
    </div>
  );
}

export default App;
