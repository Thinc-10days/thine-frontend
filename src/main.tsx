import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppRouter } from "./routes/routes.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/index.ts";
import Navbar from "./Components/NavBar.tsx";
import { Provider } from "react-redux";
import store from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Navbar />
        <AppRouter />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
