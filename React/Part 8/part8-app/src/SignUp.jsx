import { useRef } from "react";

export default function SignUp() {
  const nameRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Entered name value is", nameRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nameRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
