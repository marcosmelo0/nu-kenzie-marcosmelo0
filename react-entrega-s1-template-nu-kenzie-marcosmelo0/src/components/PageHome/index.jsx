import "../Buttons/buttons.css";
import "./index.css";

import imgLogo from "../../assets/logo.svg";
import imgIlustration from "../../assets/imgInitial.svg";

export const PageHome = ({ login }) => {
  return (
    <div className="mainContainer homeContainer">
      <div className="header">
        <img src={imgLogo} alt="logotipo nu kenzie" />
        <div className="descriptionHome">
          <h2>Centralize o controle das suas finanças</h2>
          <small>de forma rápida e segura</small>
          <div className="button">
            <button className="btnPrimary" onClick={() => login(true)}>
              Iniciar
            </button>
          </div>
        </div>
      </div>
      <div className="imgIlustration">
        <img src={imgIlustration} alt="imagem ilustrativa da aplicação" />
      </div>
    </div>
  );
};
