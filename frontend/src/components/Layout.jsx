import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="p-6">{children}</div>
    </div>
  );
};

export default Layout;