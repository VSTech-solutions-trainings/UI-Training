import { useState } from "react";
import changeNameToUpperCase from "./utils/utils";
import useToggle from "./hooks/ToggleHook";

export default function School({ schoolName }) {
  const name = changeNameToUpperCase(schoolName);

  const [schoolValue, setSchoolValue] = useToggle();

  return (
    <>
      <p>School name is {name}</p>
      <p>School value is {schoolValue ? "ON" : "OFF"}</p>
      <button onClick={setSchoolValue}>Change School</button>
    </>
  );
}
