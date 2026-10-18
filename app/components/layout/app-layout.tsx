import { Outlet } from "react-router";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";

export default function AppLayout() {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  );
}
