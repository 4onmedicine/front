import Root from "../pages/root/root";
import MainPage from "../pages/main/main";

const router = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
    ],
  },
];
export default router;
