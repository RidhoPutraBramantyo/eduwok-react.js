import React from "react";

function Sidebar() {
  const sidebarStyle = {
    width: "250px",
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px",
    position: "fixed",
    top: "0", // Membuat Sidebar melayang di atas layar
    left: "0", // Membuat Sidebar melayang di kiri layar
    height: "100vh", // Mengisi seluruh tinggi viewport
  };

  const sidebarItemStyle = {
    marginBottom: "10px",
  };

  const sidebarLinkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  };

  return (
    <div style={sidebarStyle}>
      <h2>Menu</h2>
      <div style={sidebarItemStyle}>
        <a href="#" style={sidebarLinkStyle}>
          Beranda
        </a>
      </div>
      <div style={sidebarItemStyle}>
        <a href="#" style={sidebarLinkStyle}>
          Cari
        </a>
      </div>
      <div style={sidebarItemStyle}>
        <a href="#" style={sidebarLinkStyle}>
          Pustaka
        </a>
      </div>
      {/* Tambahkan item menu lainnya sesuai kebutuhan Anda */}
    </div>
  );
}

export default Sidebar;
