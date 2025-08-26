import "./App.css";
import Name from "./Name";
import StudentsInfo from "./StudentsInfo";

import UserInfo from "./UserInfo";

function App() {
  return (
    <>
      <p>Testing</p>
      <UserInfo />
      <StudentsInfo name="Tom" />
      <div id="name"></div>
      <Name />
    </>
  );
}

export default App;
