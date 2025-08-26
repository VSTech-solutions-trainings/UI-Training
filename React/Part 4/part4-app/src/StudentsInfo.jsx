import { useState } from "react";
import Staff from "./Staff";

export default function StudentsInfo() {
  const [age, setAge] = useState(22);

  console.log("initial age", age);

  function handleIncrementAge() {
    setAge((age) => age + 1);
    console.log("age", age);
  }

  return (
    <>
      <p>This is Mr. mike , his age is {age}</p>
      <button onClick={handleIncrementAge}>Increment age</button>
      <Staff />
    </>
  );
}
