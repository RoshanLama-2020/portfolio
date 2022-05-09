import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import './index.css'

const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />

        <span className="tags bottom-tags">
          &lt;/body&gt;
        </span>
      </div>
    </>
  );
};

export default Layout;
