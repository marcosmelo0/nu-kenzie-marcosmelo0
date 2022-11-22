import React from "react";
import logo from "../../assets/logoDash.svg";
import "./style.css";
import "../Buttons/buttons.css";

export const Header = ({ login }) => {
  return (
    <header className="header">
      <div>
        <img className="logo" src={logo} alt="logotipo" />
        <button className="btnDisable" onClick={() => login(false)}>
          Inicio
        </button>
      </div>
    </header>
  );
};
