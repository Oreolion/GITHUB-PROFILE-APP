import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { PiArrowFatLinesUpFill } from "react-icons/pi";
import Loader from "./Loader";
import { Octokit } from "octokit";

function Posts() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const octokit = new Octokit({});

  const fetchUser = async () => {
    try {
      const response = await octokit.request(`GET /users/oreolion/repos`);
      console.log(response);
      const data = await response.data;
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleClick = (repositoryName) => {
    navigate(repositoryName);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      <section className="repo__container">
        <h1 className="repo__h1">my github repositories</h1>

        <ul>
          {isLoading && <Loader />}
          {!isLoading && (
            <>
              {data.map((each) => (
                <li key={each.id}>
                  <article className="repo__item">
                    <h2>Repository Name:</h2>
                    <p className="p"> {each.name}</p>
                    <Link
                      className="repo__link"
                      to={`/posts/about/${each.name}`}
                      onClick={() => handleClick(each.name)}
                    >
                      More information about this Repository &#62;&#62;&#62;
                    </Link>
                  </article>
                  <BsGithub className="github__logo" />
                </li>
              ))}
            </>
          )}
        </ul>

        <PiArrowFatLinesUpFill className="up-arrow" onClick={scrollToTop} />
      </section>
    </>
  );
}

export default Posts;
