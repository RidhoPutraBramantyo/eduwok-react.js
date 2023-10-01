import React from "react";
import "./Sidebar.css"; // Impor file CSS yang berisi gaya tambahan

function Sidebar() {
  return (
    <div className="sidebar">
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
