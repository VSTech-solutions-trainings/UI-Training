import { useState } from "react";
import "./App.css";
import PureComponent from "./PureComponent";

function App() {
  const [count, setCount] = useState(0);

  function changeCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <PureComponent />
      <p>count value is {count}</p>
      <button onClick={changeCount}>Add count</button>
    </>
  );
}

export default App;
