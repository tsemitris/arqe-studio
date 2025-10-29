import { createHashRouter } from "react-router-dom";

import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./Page/Home/Home";
import { Interior } from "./Page/Interior/Interior";
import { interiorLoader } from "./loaders/interiorLoader";
import { BookDesigner } from "./Page/BookDesigner/BookDesigner";
import { Team } from "./Page/Team/Team";
import { Gallery } from "./Page/Home/Gallery/Gallery";
import { projectLoader } from "./loaders/projectLoader";
import { FindUs } from "./Page/FindUs/FindUs";

export const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/interior/:id",
        element: <Interior />,
        loader: interiorLoader,
      },
      {
        path: "/gallery",
        element: <Gallery />,
        loader: projectLoader,
      },
      {
        path: "/book-designer",
        element: <BookDesigner />,
      },
      {
        path: "/the-team",
        element: <Team />,
      },
      {
        path: "/find-us",
        element: <FindUs />,
      },
    ],
  },
]);
