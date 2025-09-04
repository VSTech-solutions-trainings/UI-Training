import { useContext } from "react";
import { SchoolContext } from "./SchoolContext";
import { useSelector } from "react-redux";

export default function School() {
  const schoolContextValue = useContext(SchoolContext);
  const studentCount = useSelector((state) => state.StudentCount.value);

  return <p>School name is {studentCount}</p>;
}
