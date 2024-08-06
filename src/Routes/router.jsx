import MainPage from "../pages/main/Mainpage";
import ErrorPage from "../pages/ErrorPage";
import DetailPage from "../pages/Detail/DetailPage";
import Header from "../components/header/header";
import PrescriptionPage from "../pages/Prescription/PrescriptionPage";
import PrescriptionDetailPage from "../pages/PrescriptionDetail/PrescriptionDetailPage";
import DetailTestPage from "../pages/DetailTestPage";

const router = [
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/medicine/:id',
        element: <DetailPage />,
      },
      {
        path: '/prescription',
        element: <PrescriptionPage />,
      },
      {
        path: '/prescription_detail',
        element: <PrescriptionDetailPage />,
      },
      {
        path: '/testdetail',
        element: <DetailTestPage />,
      },
    ],
  },
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: '/*',
        element: <ErrorPage />,
      },
    ],
  },
];

export default router;
