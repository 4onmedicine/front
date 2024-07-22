import React from "react";
import Root from "../components/header/Header";
import MainPage from "../pages/main/main";
import Instruction from "../components/detailsub/Instruction";
import Caution from "../components/detailsub/Caution";
import Interaction from "../components/detailsub/Interaction";
import SideEffects from "../components/detailsub/SideEffects";
import Storage from "../components/detailsub/Storage";
import ErrorPage from "../pages/ErrorPage";
import DetailPage from "../pages/Detail/DetailPage";
import Header from "../components/header/Header";

const router = [
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/medicine/:id",
        element: <DetailPage />,
        children: [
          { path: "instruction", element: <Instruction /> },
          { path: "caution", element: <Caution /> },
          { path: "interaction", element: <Interaction /> },
          { path: "sideeffects", element: <SideEffects /> },
          { path: "storage", element: <Storage /> },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/*",
        element: <ErrorPage />,
      },
    ],
  },
];

export default router;
