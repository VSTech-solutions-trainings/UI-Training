import { useState } from "react";

export default function useToggle() {
  const [value, setValue] = useState(false);

  function changeValue() {
    setValue((prevValue) => !prevValue);
  }

  return [value, changeValue];
}
