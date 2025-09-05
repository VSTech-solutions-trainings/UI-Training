import { useParams } from "react-router-dom";

export default function ReferenceContainer() {
  console.log("reference");
  const { referenceName } = useParams();
  console.log("p", referenceName);

  return (
    <>
      <p>This reference is from {}</p>
      <h1>This is a Reference container component</h1>
    </>
  );
}
