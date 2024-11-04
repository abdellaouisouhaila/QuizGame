import React from "react";
import Sidebar from "./layouts/Sidebar";

export const LayoutWithoutTopBar = ({ children }) => {
  //children page mteeek ela bech tamel heritage men template hadhiii
  return (
    <div className="app-container">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};
