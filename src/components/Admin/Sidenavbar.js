import React from "react";
import {
  BsSpeedometer2,
  BsCodeSlash,
  BsPeople,
  BsTable,
  BsGrid,
  BsPersonCircle,
  BsRocketTakeoff,
} from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";

function Sidenavbar() {
  return (
    <div className="d-flex justify-content-between flex-column bg-light text-white p-3 vh-100">
      <div>
        <a href="" className="p-2">
          <BsRocketTakeoff className="me-2" />
          <span className="fs-4">LuckyTrip</span>
        </a>
        <hr className="text-secondary" />
        <ul className="nav nav-pills flex-column">
          <li className="nav-item p-2">
            <Link to="/luckytrip-react/admin/dashboard">
              <BsSpeedometer2 className="me-2" />
              <span> Dashboard</span>
            </Link>
          </li>

          <li className="nav-item p-2">
            <Link to="/luckytrip-react/admin/banner">
              <BsPeople className="me-2" />
              <span> Banner</span>
            </Link>
          </li>

          <li className="nav-item p-2">
            <Link to="/luckytrip-react/admin/order">
              <BsTable className="me-2" />
              <span> Order</span>
            </Link>
          </li>

          <li className="nav-item p-2">
            <Link to="/report">
              <BsGrid className="me-2" />
              <span> Report</span>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <hr className="text-secondary" />

        <div className="nav-item p-2">
          <a href="">
            <BsPersonCircle className="me-2" />
            <span> Logout</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidenavbar;
