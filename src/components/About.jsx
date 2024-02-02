import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Octokit } from "octokit";
import Loader from "./Loader";

const About = () => {
  const [aboutPost, setAboutPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { repositoryName } = useParams();

  const octokit = new Octokit({});

  const fetchUser = async () => {
    try {
      const response = await octokit.request(
        `GET /repos/oreolion/${repositoryName}`
      );
      console.log(response);
      const data = await response.data;
      console.log(data);
      setAboutPost(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
      <section className="about__section">
        <h1 className="about__h1">About This Repository</h1>
        {isLoading && <Loader />}
        {!isLoading && (
          <>
            <article className="item">
              <h3>Repository Name:</h3>
              <p style={{ background: "grey", padding: "1rem" }}>
                {" "}
                {aboutPost.full_name}
              </p>
            </article>
            <article className="item">
              <h3>Repository Language:</h3>
              <p style={{ background: "grey", padding: "1rem" }}>
                {" "}
                {aboutPost.language}
              </p>
            </article>
            <article className="item">
              <h3>Date Created:</h3>
              <p style={{ background: "grey", padding: "1rem" }}>
                {" "}
                {aboutPost.created_at}
              </p>
            </article>
            <article className="item">
              <h3>Date Pushed: </h3>
              <p style={{ background: "grey", padding: "1rem" }}>
                {aboutPost.updated_at}
              </p>
            </article>
            <article className="item">
              <h3>Repository Description: </h3>
              <p style={{ background: "grey", padding: "1rem" }}>
                {" "}
                {aboutPost.description}
              </p>
            </article>
            <article className="item">
              <h3>Repository Url: </h3>
              <p
                style={{
                  textAlign: "center",
                  background: "grey",
                  padding: "1rem",
                }}
              >
                {" "}
                {aboutPost.url}
              </p>
            </article>
            <article className="item">
              <h3>Repository Fork Count: </h3>
              <p style={{ background: "grey", padding: "1rem" }}>
                {" "}
                {aboutPost.forks}
              </p>
            </article>
          </>
        )}

        <span>
          <Link className="link" to={`/`}>
            &#60; &#60; &#60; Go to Home Page
          </Link>
          <Link style={{ color: "red" }} to="/github.com">
            Go to Github
          </Link>
        </span>
        <div style={{ color: "goldenrod", textAlign: "center" }}>
          © 2023 Altschool second semester Examination
        </div>
      </section>
    </>
  );
};

export default About;
