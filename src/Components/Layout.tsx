import { useState } from "react";
import { Outlet } from "react-router";
import { Sun, Moon } from "lucide-react";

const Layout = () => {
  const [mode, setMode] = useState(true);

  function toggleTheme() {
    setMode((prev) => !prev);
  }

  return (
    <main
      className={`${mode ? "dark" : ""} min-h-screen dark:bg-darkmode-bg bg-lightmode-bg flex justify-center items-center`}
    >
      <nav className="p-2 flex justify-end absolute top-0 right-0 w-full">
        <button
          className="cursor-pointer p-2 mr-2 outline-none"
          onClick={() => toggleTheme()}
        >
          {mode ? <Sun color="orange" /> : <Moon color="black" />}
        </button>
      </nav>
      <Outlet />
    </main>
  );
};

export default Layout;
