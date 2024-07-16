import Root from "../components/header/header";
import MainPage from "../pages/main/main";
import DetailPage from "../pages/Detail/detail";

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
      },
    ],
  },
];
export default router;
