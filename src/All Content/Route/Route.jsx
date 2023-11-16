import { createBrowserRouter } from "react-router-dom";
import ButtonAppBar from "../Test";

const router = createBrowserRouter([
    {
      path: "/",
      element: <ButtonAppBar></ButtonAppBar>,
    },
  ]);
export default router;