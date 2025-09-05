import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Reference from "./pages/Reference";
import Community from "./pages/Community";
import Blog from "./pages/Blog";
import PageNotFound from "./pages/PageNotFound";
import CommunityOverview from "./pages/CommunityOverview";
import CommunityConduct from "./pages/CommunityConduct";
import ReferenceContainer from "./pages/ReferenceContainer";

function App() {
  return (
    <div>
      <nav>
        <Link to="/home" className="react-links">
          Home
        </Link>
        <Link to="/learn" className="react-links">
          Learn
        </Link>
        <Link to="/reference" className="react-links">
          Reference
        </Link>
        <Link to="/community" className="react-links">
          Community
        </Link>
        <Link to="/blog" className="react-links">
          Blog
        </Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/learn" element={<Learn />}></Route>
        <Route path="/reference" element={<Reference />}>
          <Route path=":referenceName" element={<ReferenceContainer />} />
        </Route>
        <Route path="/community" element={<Community />}>
          <Route path="overview" element={<CommunityOverview />}></Route>
          <Route path="codeofconduct" element={<CommunityConduct />}></Route>
        </Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
