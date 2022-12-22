import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import AboutUs from "../components/AboutUs";
import ErrorComponent from "../components/ErrorComponent";
import MemberPage from "../components/MemberPage";
import SearchPage from "../components/SearchPage";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/search-page",
        element: <SearchPage />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/member/:username",
        element: <MemberPage />,
      },
    ],
  },
]);