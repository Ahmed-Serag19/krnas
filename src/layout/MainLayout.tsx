import { Outlet } from "react-router";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main
        className="flex-grow flex items-center justify-center"
        aria-label="Main Content"
      >
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
