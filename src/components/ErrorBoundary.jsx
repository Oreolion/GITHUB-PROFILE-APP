import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section style={{ padding: 30 }}>
          <h1 style={{ color: "red" }}>OOPS!!! Something went wrong... such an unexpected error... </h1>
          <button
            style={{ padding: 10, color: "green" }}
          >
            <a href="/">&#60; Go back</a>
            {" "}
            
          </button>
        </section>
      );
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}
export default ErrorBoundary;
