import React, { PureComponent } from "react";
import { Link, Outlet } from "react-router-dom";
import Sidenavbar from "./Sidenavbar";
import Navbar from "./Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./Banner";

function Dashboard({ component }) {
  console.log(component);
  return (
    <div className="d-flex">
      <div className="w-auto">
        <Sidenavbar />
      </div>
      <div className="col">
        <Navbar />
        {component == "banner" ? <Banner /> : <></>}
        {component == "order" ? <h3>Order</h3> : <></>}
      </div>
    </div>
  );
}

export default Dashboard;
