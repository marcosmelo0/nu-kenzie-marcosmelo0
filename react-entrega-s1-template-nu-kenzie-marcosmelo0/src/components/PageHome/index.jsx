import "../Buttons/buttons.css";
import "./index.css";
import { useState, useEffect } from "react";
import { FormLogin } from "../FormEntrys/Login";
import { FormRegister } from "../FormEntrys/Register";

export const PageHome = ({ login }) => {
  const [register, setRegister] = useState(false);
  const [randomQuote, setRandomQuote] = useState("");

  const quotes = [
    "Um orçamento bem planejado é o primeiro passo para transformar sonhos em realidade financeira.",
    "A falta de planejamento financeiro é como construir uma casa sem alicerces: tudo pode desmoronar a qualquer momento.",
    "Investir hoje tempo no planejamento financeiro é garantir um amanhã mais seguro e estável.",
    "O sucesso financeiro não é uma questão de sorte, mas de planejamento e disciplina."
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  }, []);

  return (
    <div className="mainContainer homeContainer">
      <div className="header">
        <h2><strong>Finance</strong> Melo</h2>
        <div className="descriptionHome">
          <h2>{randomQuote}</h2>
        </div>
      </div>
      {register ? <FormRegister setRegister={setRegister} /> : <FormLogin setRegister={setRegister} />}
    </div>
  );
};
