import { useContext } from "react";
import { NameContext } from "./Context";

export default function School() {
  const name = useContext(NameContext);
  return (
    <>
      <p>Student name is {name}</p>
    </>
  );
}
