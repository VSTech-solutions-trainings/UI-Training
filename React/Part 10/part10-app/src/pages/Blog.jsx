import { useNavigate } from "react-router-dom";

export default function Blog() {
  const navigate = useNavigate();

  return (
    <>
      <h1>This is a Blog component</h1>
      <button onClick={() => navigate("/learn")}>Back to learn</button>
    </>
  );
}
