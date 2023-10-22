import { Link, useNavigate } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import ErorBoundaryTest from "./ErorBoundaryTest"
import { ErrorBoundary } from "react-error-boundary";

const Home = () => {
  const navigateHome = useNavigate();

  const handleClick = () => {
    navigateHome("/posts");
  };


  return (
    <>
      <ErrorBoundary >
        <section className="homepage">
          <h1 className="homepage__h1">Welcome to my github profile</h1>
          <BsGithub className="home__github__logo" />

          <Link className="home__link" to="/posts" onClick={handleClick}>
            CLICK TO VIEW REPOSITORIES
          </Link>
         
          <ErorBoundaryTest />
        </section>

        <div style={{ color: "goldenrod", textAlign: "center" }}>
          © 2023 Altschool second semester Examination
        </div>
      </ErrorBoundary>
    </>
  );
};

export default Home;
