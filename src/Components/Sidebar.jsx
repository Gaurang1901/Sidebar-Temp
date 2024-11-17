import React, { useState } from "react";
import "./Sidebar.css";

const menuData = [
  {
    title: "Services",
    submenu: [
      { title: "Cloud Infrastructure and DevOps" },
      { title: "Mobile Application" },
      { title: "Artificial Intelligence" },
      { title: "Web Application" },
      {
        title: "Low Code No Code",
        submenu: [{ title: "Frappe" }, { title: "Mendix" }],
      },
    ],
  },
  { title: "Blogs" },
  { title: "Careers" },
  { title: "Contact us" },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleMenu = (menuTitle) => {
    setActiveMenu(activeMenu === menuTitle ? null : menuTitle);
    setActiveSubmenu(null); // Reset submenu state when toggling menu
  };

  const toggleSubmenu = (submenuTitle) => {
    setActiveSubmenu(activeSubmenu === submenuTitle ? null : submenuTitle);
  };

  return (
    <div className={`sidebar ${isOpen ? "sidebarOpen" : ""}`}>
      <div className="sidebarHeader">
        <h2>Quantasis</h2>
        <button className="closeButton" onClick={toggleSidebar}>
          ✕
        </button>
      </div>
      <ul className="menu">
        {menuData.map((menu, index) => (
          <li key={index} className="menuItem">
            <div
              className="menuTitle"
              onClick={() => menu.submenu && toggleMenu(menu.title)}
            >
              {menu.title}
              {menu.submenu && (
                <span className="arrow">
                  {activeMenu === menu.title ? "▼" : "►"}
                </span>
              )}
            </div>
            {menu.submenu && activeMenu === menu.title && (
              <ul className="submenu">
                {menu.submenu.map((sub, subIndex) => (
                  <li
                    key={subIndex}
                    className={`submenuItem ${
                      sub.submenu ? "hasSubsubmenu" : ""
                    }`}
                  >
                    <div
                      className="submenuTitle"
                      onClick={() => sub.submenu && toggleSubmenu(sub.title)}
                    >
                      {sub.title}
                      {sub.submenu && (
                        <span className="arrow">
                          {activeSubmenu === sub.title ? "▼" : "►"}
                        </span>
                      )}
                    </div>
                    {sub.submenu && activeSubmenu === sub.title && (
                      <ul className="subsubmenu">
                        {sub.submenu.map((subSub, subSubIndex) => (
                          <li key={subSubIndex}>{subSub.title}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
