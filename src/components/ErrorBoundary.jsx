import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
    // You can also log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <section style={{ padding: 30 }}>
          <h1 style={{ color: "red" }}>OOPS!!! Something went wrong...</h1>
          <button
            //   onClick={}
            style={{ padding: 10, color: "green" }}
          >
            {" "}
            &#60; Go back
          </button>
        </section>
      );
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}
export default ErrorBoundary;
