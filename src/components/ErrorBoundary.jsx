import { Component } from "react";
import NotFound from "./NotFound";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary component caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <NotFound />
          <a href="/">Click here to go back to the home page.</a>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
