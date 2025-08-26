import { createPortal } from "react-dom";

export default function Name() {
  return createPortal(<p>This is Tom</p>, document.getElementById("name"));
}
