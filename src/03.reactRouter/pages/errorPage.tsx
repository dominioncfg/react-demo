import { isRouteErrorResponse, useRouteError } from "react-router";

export const AppErrorBoundary = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <h1>404</h1>
          <p>Sorry, the page you’re looking for doesn’t exist.</p>
        </div>
      );
    }

    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h1>{error.status}</h1>
        <p>{error.statusText}</p>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>😬 Ups!</h1>
      <p>Something went wrong.</p>
      <pre style={{ color: "gray" }}>{String(error)}</pre>
    </div>
  );
}