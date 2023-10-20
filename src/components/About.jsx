import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "./Loader";
// import process.env from "./"

const About = () => {
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { repositoryName } = useParams();
  const { GITHUB_API_KEY } = process.env;

  const postURL = `https://api.github.com/graphql`;
  const query = `
  {
    repository(owner: "oreolion", name: "${repositoryName}") {
      
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
      
    `;

  const headers = {
    Authorization: `Bearer ${GITHUB_API_KEY}`,
    "Content-Type": "application/json",
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.post(postURL, { query }, { headers });
        setPost(result.data.data.repository);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [query, postURL]);
  return (
    <>
      <section className="about__section">
        <h1>About This Repository</h1>
        {isLoading && <Loader />}
        {!isLoading && (
          <>
            <article className="item">
              <h3>Repository Name:</h3>
              <p style={{ background: "grey", padding: "1rem" }}>
                {" "}
                {repositoryName}
              </p>
            </article>
            <article className="item">
              <h3>Date Created:</h3>
              <p style={{ background: "grey", padding: "1rem" }}>
                {" "}
                {post.createdAt}
              </p>
            </article>
            <article>
              <h3>Date Pushed: </h3>
              <p style={{ background: "grey", padding: "1rem" }}>
                {post.pushedAt}
              </p>
            </article>
            <article className="item">
              <h3>Repository Description: </h3>
              <p style={{ background: "grey", padding: "1rem" }}>
                {" "}
                {post.description}
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
                {post.url}
              </p>
            </article>
            <article className="item">
              <h3>Repository Fork Count: </h3>
              <p style={{ background: "grey", padding: "1rem" }}>
                {" "}
                {post.forkCount}
              </p>
            </article>
          </>
        )}

        <span>


        <Link className="link" to="/">
          &#60; &#60; &#60; Go to Home Page
          </Link>
        <Link style={{color: 'red'}} to="/github.com">Go to Github</Link>
        </span>
      </section>
    </>
  );
};

export default About;
