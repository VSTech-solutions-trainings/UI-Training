import { useEffect, useState } from "react";
import SampleComponent from "./SampleComponent";

function PureComponent(props) {
  const [age, setAge] = useState(20);
  const [name, setName] = useState("Mike");

  useEffect(() => {
    console.log("Age is modified");
  }, [name]);

  function handleAge() {
    setAge((prevAge) => prevAge + 1);
  }
  function handleName() {
    setName((prevName) => "mr" + prevName);
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${age}`)
      .then((res) => res.json())
      .then((data) => console.log("fetched data", data));
  }, [age]);

  return (
    <>
      <p>Age is {age}</p>
      <p>Name is {name}</p>
      <p>This is a Pure component {props.name}</p>
      <button onClick={handleAge}>Add age</button>
      <button onClick={handleName}>update name</button>
      <SampleComponent />
    </>
  );
}

export default PureComponent;
