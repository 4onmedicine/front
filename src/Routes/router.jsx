import MainPage from "../pages/main/Mainpage";
<<<<<<< HEAD
=======
import Instruction from "../components/detailsub/Instruction";
import Caution from "../components/detailsub/Caution";
import Interaction from "../components/detailsub/Interaction";
import SideEffects from "../components/detailsub/SideEffects";
import Storage from "../components/detailsub/Storage";
>>>>>>> parent of 579d0a0 (Chore: 로딩창 수정 및 에러 핸들링, 필요없는 코드 삭제)
import ErrorPage from "../pages/ErrorPage";
import DetailPage from "../pages/Detail/DetailPage";
import Header from "../components/header/header";
import PrescriptionPage from "../pages/Prescription/PrescriptionPage";
import PrescriptionDetailPage from "../pages/PrescriptionDetail/PrescriptionDetailPage";
import DetailTestPage from "../pages/DetailTestPage";

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
      {
        path: "/prescription",
        element: <PrescriptionPage />,
      },
      {
        path: "/prescription_detail",
        element: <PrescriptionDetailPage />,
      },
      {
        path: "/testdetail",
        element: <DetailTestPage />,
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
