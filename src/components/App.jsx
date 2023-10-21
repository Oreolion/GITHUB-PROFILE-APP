import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Posts";
import Posts from "./Home";
import ErrorPage from "./ErrorPage";
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts" element={<Home />} />
          <Route path="/posts/about/:repositoryName" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
};

export default App;
