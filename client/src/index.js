import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";

import { customTheme } from "./theme";
import { AppProvider } from "./context/appContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </AppProvider>
);
