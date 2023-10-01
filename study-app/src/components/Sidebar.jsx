import React, { useState } from "react";
import "./Sidebar.css"; // Impor file CSS yang berisi gaya tambahan

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className={`sidebar ${showSidebar ? "show" : "hide"}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        <i
          className={`fa ${
            showSidebar ? "fa-chevron-left" : "fa-chevron-right"
          }`}
        />
      </div>
      <h2>Menu</h2>
      <div className="sidebar-item">
        <a href="#" className="sidebar-link">
          Beranda
        </a>
      </div>
      <div className="sidebar-item">
        <a href="#" className="sidebar-link">
          Cari
        </a>
      </div>
      <div className="sidebar-item">
        <a href="#" className="sidebar-link">
          Pustaka
        </a>
      </div>
      {/* Tambahkan item menu lainnya sesuai kebutuhan Anda */}
    </div>
  );
}

export default Sidebar;
