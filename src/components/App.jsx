import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Posts from "./Posts";
import ErrorPage from "./ErrorPage";

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about/:repositoryName" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </>
  );
};

export default App;
