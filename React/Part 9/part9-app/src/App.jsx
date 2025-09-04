import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import School from "./School";
import { SchoolContext } from "./SchoolContext";
import { addStudent, decreaseStudent } from "./store/StudentCounter";

function App() {
  const dispatch = useDispatch();

  const studentCount = useSelector((state) => state.StudentCount.value);

  return (
    <div>
      <p>Student count is {studentCount}</p>
      <button onClick={() => dispatch(addStudent())}>Add Student</button>
      <button onClick={() => dispatch(decreaseStudent())}>
        Remove Student
      </button>
    </div>
  );
}

export default App;
