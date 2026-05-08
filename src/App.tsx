import { createBrowserRouter, RouterProvider } from "react-router";

import Layout from "./Components/Layout";
import WelcomePage from "./Components/WelcomePage";
import AvailableStories from "./Components/AvailableStories";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <WelcomePage /> },
        { path: "/stories", element: <AvailableStories /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
