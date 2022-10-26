import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "reportWebVitals";
import SearchResults from "components/SearchResults/SearchResults";
import SaleDetails from "components/SaleDetails/SaleDetails";
import { getSalesData, getSaleDetails } from "api/api";
import App from "App";
import ErrorPage from "components/Errorpage/Errorpage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "search",
        element: <SearchResults />,
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const query = url.searchParams.get("query");
          return getSalesData(query || "");
        },
      },
    ],
  },
  {
    path: "sale/:saleId",
    element: <SaleDetails />,
    errorElement: <ErrorPage />,
    loader: async ({ params }) => {
      return getSaleDetails(params.saleId || "");
    },
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
