import { useReducer, useState } from "react";

export default function ComplexObject() {
  //   const [age, setAge] = useState(0);
  //   const [name, setName] = useState('');
  //   const [address, setAddress] = useState('');

  //   function addAge() {
  //     setAge(25);
  //   }

  //   function addName() {
  //     setName("Mike");
  //   }

  //   function addAddress() {
  //     setAddress("123 ST");
  //   }

  const complexObjectState = {
    age: 0,
    name: "",
    address: "",
    role: "",
  };

  function reducerFunc(state, action) {
    switch (action.type) {
      case "AGE":
        return {
          ...state,
          age: action.payload,
        };
      case "NAME":
        return {
          ...state,
          name: "Mike",
        };
      case "ADDRESS":
        return {
          ...state,
          address: "123 ST",
        };
    }
  }

  const [state, dispatch] = useReducer(reducerFunc, complexObjectState);

  function addAge() {
    dispatch({
      type: "AGE",
      payload: 30,
    });
  }

  function addName() {
    dispatch({
      type: "NAME",
    });
  }

  function addAddress() {
    dispatch({
      type: "ADDRESS",
    });
  }

  return (
    <>
      <p>
        Age is {state.age}, Name is {state.name}, Address is {state.address}
      </p>
      <button onClick={addAge}>Add Age</button>
      <button onClick={addName}>Add Name</button>
      <button onClick={addAddress}>Add Address</button>
    </>
  );
}
