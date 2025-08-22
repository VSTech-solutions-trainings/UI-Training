import "./App.css";
import Welcome from "./Welcome";

function App() {
  let personName = "Tom";

  return (
    <div>
      <div id="title-id9">
        <h1 className="title" style={{ color: "red" }}>
          This is react part 2
          {personName === "Mike" ? <p>Hello Mike</p> : <p>Hello Tom</p>}
        </h1>
      </div>
      <Welcome />
      <br />
    </div>
  );
}

export default App;
