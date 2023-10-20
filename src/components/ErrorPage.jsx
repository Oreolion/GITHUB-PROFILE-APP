import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <section style={{ textAlign: "center" }}>
        <p>Error 404</p>
        <Link to='/home' style={{ fontSize: 20, color: "red"}} >
        &#60; &#60; &#60; return to previous page
        </Link>
      </section>
    </>
  );
};

export default ErrorPage;
