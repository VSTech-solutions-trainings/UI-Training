import "./App.css";
import Students from "./Students";

import { NameContext } from "./Context";
import School from "./School";

function App() {
  return (
    <>
      <NameContext.Provider value="Mike">
        <Students />
        <School />
      </NameContext.Provider>
    </>
  );
}

export default App;
