import { useState } from "react";

const ErorBoundaryTest = () => {
  const [isError, setIsError] = useState(false);

  if (isError) {
    throw new Error("This is an unexpected Error...");
  }
  return (
    <section style={{ padding: 30 }}>
      <button className="home-trigger-btn" onClick={() => setIsError(true)}>
        {" "}
        &#62; Test Error Boundary
      </button>
    </section>
  );
};

export default ErorBoundaryTest;
