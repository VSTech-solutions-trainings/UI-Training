import { Link, Outlet } from "react-router-dom";

export default function Community() {
  return (
    <>
      <h1>This is a Community component</h1>
      <div>
        <nav>
          <Link to="/community/overview" className="react-links">
            Overview
          </Link>
          <Link to="/community/codeofconduct" className="react-links">
            Code of conduct
          </Link>
        </nav>
        <Outlet />
      </div>
    </>
  );
}
