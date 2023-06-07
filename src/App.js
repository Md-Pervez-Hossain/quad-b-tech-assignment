import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Movie from "./Components/Movie/Movie";
import ShowMovies from "./Components/Movie/ShowMovies";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Movie></Movie>,
    },
    {
      path: "/:name",
      element: <ShowMovies></ShowMovies>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
