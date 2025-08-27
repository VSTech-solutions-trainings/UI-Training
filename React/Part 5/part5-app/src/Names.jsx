import { useState } from "react";

export default function Names() {
  const [count, setCount] = useState(0);

  //console.log(count);
  //7 7 7 7

  function handleIncrementCount() {
    // setCount(count + 7);
    // setCount(count + 7);
    // setCount(count + 7);
    // setCount(count + 7);
    setCount((prevCount) => prevCount + 7);
    setCount((prevCount) => prevCount + 7);
    setCount((prevCount) => prevCount + 7);
    setCount((prevCount) => prevCount + 7);
    console.log("updated", count);
  }

  return (
    <>
      <button onClick={handleIncrementCount}>Add count</button>
    </>
  );
}
