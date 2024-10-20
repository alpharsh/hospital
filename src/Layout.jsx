import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <main className="top-0 absolute w-screen">
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default Layout;
