import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import router from "./Routes/router";
import GlobalStyles from "./styles/global";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { RecoilRoot } from "recoil";

const App = () => {
  const RouterObject = createBrowserRouter(router);
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={RouterObject} />
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
