import React from "react";
import imgEmpty from "../../assets/emptyList.svg";

export const EmptyList = () => {
  return (
    <>
      <div className="divEmptyList">
        <h2 className="titleEmptyList">
          Você ainda não possui nenhum lançamento
        </h2>
        <img src={imgEmpty} alt="" />
        <img src={imgEmpty} alt="" />
        <img src={imgEmpty} alt="" />
      </div>
    </>
  );
};
