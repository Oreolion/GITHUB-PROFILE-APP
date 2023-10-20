import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { PiArrowFatLinesUpFill } from "react-icons/pi";
import Loader from "./Loader";
import ErrorBoundary from "./ErrorBoundary";
import { Suspense } from "react";

function Home() {
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { GITHUB_API_KEY } = process.env;


  const baseURL = "https://api.github.com/graphql";
  const query = `
      {
        user(login: "oreolion") {
          repositories(first: 50) {
            nodes {
              id
              url
              name
              homepageUrl
              createdAt
              pushedAt
              description
              forkCount
            }
          }
        }
      }
    `;

  const headers = {
    Authorization: `Bearer ${GITHUB_API_KEY}`,
    "Content-Type": "application/json",
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post(baseURL, { query }, { headers });
        setRepositories(response.data.data.user.repositories.nodes);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  });

  useEffect(() => {
    try {

      throw new Error("I am an error");
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleClick = (repositoryName) => {
    navigate(repositoryName);
  };

  const triggerError = () => {
    throw new Error("I am an error");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

 
  return (
    <>
      <Suspense fallback={<ErrorBoundary />}>
          <section className="repo__container">
            <h1>my github repositories</h1>

            <ul>
              {isLoading && <Loader />}
              {!isLoading && (
                <>
                  {repositories.map((repository) => (
                    <li key={repository.id}>
                      <article className="repo__item">
                        <h2>Repository Name:</h2>
                        <p className="p"> {repository.name}</p>
                        <Link
                          className="repo__link"
                          to={`/about/${repository.name}`}
                          onClick={() => handleClick(repository.name)}
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
            <button
                      onClick={triggerError}
                      style={{ marginBottom: 20, padding: 10, margin: 5 }}
                    >
                      trigger error
                    </button>
                  
                  <div style={{color: 'goldenrod', textAlign: 'center'}}>© 2023 Altschool second semester Examination</div>
                  

            <PiArrowFatLinesUpFill className="up-arrow" onClick={scrollToTop} />
          </section>
      </Suspense>
    </>
  );
}

export default Home;
