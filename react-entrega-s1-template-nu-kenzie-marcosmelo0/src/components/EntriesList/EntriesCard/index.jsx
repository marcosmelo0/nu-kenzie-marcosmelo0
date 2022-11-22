import React from "react";
import { FaTrash } from "react-icons/fa";

export const EntriesCard = ({ entries, id, removeEntry, filter }) => {
  return (
    <li id={id}>
      <div className="headerList">
        <h3>{entries.description}</h3>
        <div className="InfoHeader">
          <span>
            {Number(entries.value).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <button onClick={() => removeEntry(entries.id)} className="btnTrash">
            <FaTrash />
          </button>
        </div>
      </div>
      <span>{entries.typeEntry}</span>
    </li>
  );
};
