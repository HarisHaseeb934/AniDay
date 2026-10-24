import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Player } from "./pages/Player";
import Sort from "./pages/Sort";
import Recent from "./pages/Recent";
import Loading from "./components/Loading";
import ErrorPage from "./pages/ErrorPage";
import Watchlist from "./pages/Watchlist";
import { Favourites } from "./customeHooks/useFavourites";
import Terms from "./pages/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/AniPlayer/:id",
        element: <Player />,
      },
      {
        path: "/sort/:paramGenre",
        element: <Sort />,
      },
      {
        path: "/sort",
        element: <Sort />,
      },
      {
        path: "/recent",
        element: <Recent />,
      },
      {
        path: "/watchlist",
        element: <Watchlist />,
      },
      {
        path: "/terms-of-services",
        element: <Terms />,
      },
    ],
  },
]);

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Favourites>
        <RouterProvider router={router} />
      </Favourites>
    </QueryClientProvider>
  );
};

export default App;
