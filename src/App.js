import React from "react";

function Car({ brand }) {
  return (
    <div>
      <h3>I am a {brand} car </h3>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Welcome to My CRA App</h1>
      <h2>My Garage:-</h2>
      <Car brand="Tesla" />
      <Car brand="BMW" />
      <Car brand="Audi" />
      <Car brand="Porche"/>
      
    </div>
  );
}

export default App;
