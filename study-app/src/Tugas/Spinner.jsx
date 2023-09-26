import React from "react";
import logo from "../img/sharingan.png";

export default function Spinner() {
  return (
    <div>
      <img
        src="../img/sharingan.png"
        alt=""
        style={{
          width: "200px",
          height: "2000px",
          transition: "tranform 0.5s",
        }}
      />
    </div>
  );
}
