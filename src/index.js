import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { LoginContextProvider } from "./store/login-context";
import { TimeContextProvider } from "./store/time-context";

ReactDOM.render(
  <LoginContextProvider>
    <TimeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TimeContextProvider>
  </LoginContextProvider>,
  document.getElementById("root")
);
