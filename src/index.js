import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { NetworkStatusProvider } from "./Components/NetworkStatus";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/Responsive-Instagram-Website-Frontend-Clone">
    <NetworkStatusProvider>
      <App />
    </NetworkStatusProvider>
  </BrowserRouter>
);


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
