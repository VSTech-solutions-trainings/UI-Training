import { useContext } from "react";
import { NameContext } from "./Context";

export default function Students() {
  const name = useContext(NameContext);

  console.log("name", name);

  return (
    <>
      <p>Student name is {name}</p>
    </>
  );
}
