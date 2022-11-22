import React from "react";

export const Filter = ({ setFilter }) => {
  return (
    <>
      <div className="filter">
        <h3>Resumo financeiro</h3>
        <div className="btnsFilter">
          <button className="btnPrimary" onClick={() => setFilter("todos")}>
            Todos
          </button>
          <button className="btnDisable" onClick={() => setFilter("entrada")}>
            Entradas
          </button>
          <button className="btnDisable" onClick={() => setFilter("saida")}>
            Despesas
          </button>
        </div>
      </div>
    </>
  );
};
