import { useState } from "react";

function Products(props) {
  const [count, setCount] = useState(0);

  function changeCount() {
    setCount((prevCount) => prevCount + 1);
  }

  console.log(props);
  return (
    <>
      <p>Hello Mr.{props.name}</p>
      <button onClick={changeCount}>Click here</button>
      <p>Count value is {count}</p>
    </>
  );
}

export default Products;
