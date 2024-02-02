import { Link, useNavigate } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import ErorBoundaryTest from "./ErorBoundaryTest";
import { ErrorBoundary } from "react-error-boundary";
import { Octokit } from "octokit";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigateHome = useNavigate();

  const octokit = new Octokit({});

  const fetchUser = async () => {
    try {
      const response = await octokit.request(`GET /users/oreolion`);
      console.log(response);
      const result = await response.data;
      //   console.log(result);
      setData(result);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleClick = () => {
    navigateHome("/posts");
  };

  return (
    <>
      <ErrorBoundary>
        {isLoading && <Loader />}
        <>
          {!isLoading && (
            <>
              <section className="homepage">
                <h1 className="homepage__h1">Welcome to my github profile</h1>
                <div className="inner__box">
                  <div className="box1">
                    <div className="imgbox">
                      <img src={data.avatar_url} alt="image" />
                    </div>
                    <div className="infobox">
                      <div className="topbox">
                        <div className="email">{data.name}</div>
                        <div className="name">{data.login}</div>
                        <div className="name">Location: {data.location}</div>
                      </div>

                      <div className="btmbox">
                        <div className="name">Followers: {data.followers}</div>
                        <div className="name">Followings: {data.following}</div>
                        <div className="name">
                          Repositories: {data.public_repos}
                        </div>
                      </div>
                    </div>
                  </div>
                  <BsGithub className="home__github__logo" />

                  <div className="box1">
                    <Link
                      className="home__link"
                      to="/posts"
                      onClick={handleClick}
                    >
                      CLICK TO VIEW REPOSITORIES
                    </Link>
                    <Link
                      className="home__link"
                      to={data.html_url}
                      onClick={handleClick}
                    >
                      GO TO GITHUB
                    </Link>

                    <ErorBoundaryTest />
                  </div>
                </div>
              </section>
              <div style={{ color: "goldenrod", textAlign: "center" }}>
                © 2023 Altschool second semester Examination
              </div>
            </>
          )}
        </>
      </ErrorBoundary>
    </>
  );
};

export default Home;
