import { BiMenu, BiSearch } from "react-icons/bi";
import { useState } from "react";
import { ColorMode } from "./ThemeProvider";
import { FaGithub } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const TopBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="topbar">
      <div className="topbar-left">
        <img src="/logo-dark.svg" alt="Logo" className="logo" />
      </div>
      <div className="searchbar">
        <BiSearch className="search-icon" />
        <input className="input-searchbar" placeholder="Search..." />
      </div>
      <button className="icon-button" onClick={toggleSidebar}>
        <BiMenu />
      </button>
      {/* Sidebar Drawer */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="icon-button" onClick={toggleSidebar}>
          <FaX/>
        </button>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <div className="icons-club">
            <ColorMode />
            <button className="icon-button" onClick={() => window.open("https://github.com/IndokuDev", "_blank")}>
            <FaGithub />
            </button>
          </div>
        </ul>
      </div>
      {/* Overlay */}
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default TopBar;
