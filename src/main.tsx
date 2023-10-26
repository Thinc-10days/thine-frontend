import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppRouter } from "./routes/routes.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/index.ts";
import NavBar from "./Components/navBar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <NavBar />
      <AppRouter />
    </ChakraProvider>
  </React.StrictMode>
);
