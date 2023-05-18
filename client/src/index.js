import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { ScrollToTop } from "./Components/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <ChakraProvider> */}
        <ScrollToTop />
        <App />
        {/* </ChakraProvider> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
