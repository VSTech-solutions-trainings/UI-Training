import { useCallback, useState } from "react";
import "./App.css";
import ChildComponent from "./ChildComponent";

function App() {
  const [val, setVal] = useState(0);
  const [age, setAge] = useState(20);

  function changeAge() {
    setAge((age) => age + 10);
  }

  // const changeAge = useCallback(
  //   function () {
  //     setAge((age) => age + 10);
  //   },
  //   [age]
  // );

  function changeVal() {
    setVal((preVal) => preVal + 10);
  }

  return (
    <>
      <ChildComponent age={age} />
      <p>value is {val}</p>
      <button onClick={changeAge}>Change Age</button>
    </>
  );
}

export default App;
