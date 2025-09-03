import { useState } from "react";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    console.log("Entered values:", name);
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          UserName
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </label>
        <label>
          Password
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
