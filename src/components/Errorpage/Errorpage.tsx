import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as ErrorType;

  type ErrorType = {
    data: object;
    status: number;
    statusText: string;
    message: string;
  };

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText}</i>
      </p>
    </div>
  );
}
