import { useState } from "react";
import changeNameToUpperCase from "./utils/utils";
import useToggle from "./hooks/ToggleHook";

export default function Student({ studentName }) {
  const name = changeNameToUpperCase(studentName);

  const [studentValue, changeStudentValue] = useToggle();

  return (
    <>
      <p>Student name is {name}</p>
      <p>Student value is {studentValue ? "ON" : "OFF"}</p>
      <button onClick={changeStudentValue}>Change Student</button>
    </>
  );
}
