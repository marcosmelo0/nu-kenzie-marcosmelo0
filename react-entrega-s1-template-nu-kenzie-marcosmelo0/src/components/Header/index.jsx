import React from "react";
import logo from "../../assets/logoDash.svg";
import "./style.css";
import "../Buttons/buttons.css";

export const Header = ({ login }) => {
  return (
    <header className="header">
      <div>
        <nav className="nav-header">
          <h1>
            <strong className="btn-primary">Finance</strong> Melo
          </h1>
          <button className="btnDisable" onClick={() => login(false)}>
              INICIO
          </button>
        </nav>
      </div>
    </header>
  );
};
