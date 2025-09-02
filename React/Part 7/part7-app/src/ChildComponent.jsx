import { memo, useMemo } from "react";

function ChildComponent(props) {
  let output = 0;

  const finalOutput = useMemo(
    function () {
      for (let i = props.age; i < 500000000; i++) {
        output++;
      }
      return output;
    },
    [props.age]
  );
  console.log("child rendering");

  return (
    <>
      <p>{props.age}</p>
      {finalOutput}
      <button onClick={props.changeAge}>Change Age</button>
    </>
  );
}

export default memo(ChildComponent);
