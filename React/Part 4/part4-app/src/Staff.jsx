import { useRef } from "react";

export default function Staff() {
  console.log("this is staff");

  const countRef = useRef(90);
  console.log("count is", countRef.current);

  function incrementCount() {
    countRef.current = 95;
    console.log("updated count is", countRef.current);
  }
  return (
    <>
      <p>This is a staff comp</p>
      <button onClick={incrementCount}>Increase count value</button>
    </>
  );
}
