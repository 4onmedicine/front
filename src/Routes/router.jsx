import React from "react";
import Root from "../components/header/header";
import MainPage from "../pages/main/main";
import DetailPage from "../pages/Detail/detail";
import Instruction from "../components/detailsub/Instruction";
import Caution from "../components/detailsub/Caution";
import Interaction from "../components/detailsub/Interaction";
import SideEffects from "../components/detailsub/SideEffects";
import Storage from "../components/detailsub/Storage";

const router = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/detail",
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
];

export default router;
