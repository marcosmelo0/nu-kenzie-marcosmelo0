import React from "react";
import "./index.css";
export const ValueTotal = ({ entriesList }) => {
  const total = entriesList.reduce((acc, act) => {
    if (act.typeEntry === "saida") {
      return acc - Number(act.value);
    } else {
      return acc + Number(act.value);
    }
  }, 0);

  return (
    <section className="sectionTotal">
      <div className="">
        <h2>Valor Total:</h2>
        <span>
          {total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <p>O valor total se refere ao saldo</p>
    </section>
  );
};
