import React from "react";
import Head from "./Head";
import Search from "./Search";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="Header shadow-sm">
        <Head />
        <Search />
        <Navbar />
      </div>

      <Outlet />
    </>
  );
}
