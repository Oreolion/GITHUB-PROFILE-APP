import { Link, useNavigate } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import ErrorBoundary from "./ErrorBoundary";
import { Suspense } from "react";

const Home = () => {
  const navigateHome = useNavigate();

  const handleClick = () => {
    navigateHome("/posts");
  };

  const triggerError = () => {
    throw new Error("I am an error");
  };

  return (
    <>
      <Suspense fallback={<ErrorBoundary />}>
        <section className="homepage">
          <h1 className="homepage__h1">Welcome to my github profile</h1>
          <BsGithub className="home__github__logo" />

          <Link className="home__link" to="/posts" onClick={handleClick}>
            CLICK TO VIEW REPOSITORIES
          </Link>
          <button className="home-trigger-btn" onClick={triggerError}>
            trigger Error Page
          </button>
        </section>

        <div style={{ color: "goldenrod", textAlign: "center" }}>
          © 2023 Altschool second semester Examination
        </div>
      </Suspense>
    </>
  );
};

export default Home;
