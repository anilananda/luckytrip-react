import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Admin/Banner";
import Dashboard from "./components/Admin/Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />

  // <BrowserRouter>
  //   <Routes>
  //     <Route path="luckytrip-react" element={<App />} />
  //     {/* <Route path="/admin/login" element={<h3>Login page</h3>} /> */}
  //     <Route path="luckytrip-react/dashboard" element={<Dashboard />}>
  //       <Route path="banner" element={<Banner />} />
  //     </Route>
  //     <Route path="*" element={<h2>Error 404</h2>} />
  //   </Routes>
  // </BrowserRouter>
);
