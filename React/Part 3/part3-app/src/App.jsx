import "./App.css";
import Information from "./Information";
import Products from "./Products";

function App() {
  let count = 0;
  function incrementCount() {
    count = count + 1;
    console.log(count);
  }

  return (
    <>
      <Products name="tom" age="26" incrementFunc={incrementCount} />
      <Information />
    </>
  );
}

export default App;
