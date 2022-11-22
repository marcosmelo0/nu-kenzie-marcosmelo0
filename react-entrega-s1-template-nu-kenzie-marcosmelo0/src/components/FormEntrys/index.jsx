import React from "react";
import { TbCurrencyReal } from "react-icons/tb";
import { useState } from "react";
import "./Form.css";

export const Form = ({ addEntry }) => {
  let [count, setCount] = useState(0);

  const [formData, setFormData] = useState({
    description: "",
    value: "",
    typeEntry: "",
    id: count,
  });

  const submit = (event) => {
    event.preventDefault();
    setCount((count = count + 1));
    setFormData({ ...formData, id: count });
    addEntry(formData);
  };

  return (
    <>
      <form onSubmit={submit}>
        <label htmlFor="DescriptionInput">Descrição</label>
        <div>
          <input
            type="text"
            required
            placeholder="Digite aqui sua descrição"
            onChange={(event) =>
              setFormData({ ...formData, description: event.target.value })
            }
          />
          <small>Ex: compra de roupas</small>
        </div>
        <section className="inputs">
          <div>
            <label htmlFor="ValueInput">Valor</label>
            <div>
              <input
                required
                type="number"
                id="inputValue"
                placeholder="1"
                onChange={(event) =>
                  setFormData({ ...formData, value: event.target.value })
                }
              />
              <TbCurrencyReal className="iconReal" />
            </div>
          </div>
          <div>
            <label htmlFor="TypeEntry">Tipo de valor</label>
            <select
              name="select"
              id="typeEntry"
              onChange={(event) =>
                setFormData({ ...formData, typeEntry: event.target.value })
              }
            >
              <option selected={true} disabled>
                Definir...
              </option>
              <option value={"entrada"}>Entrada</option>
              <option value={"saida"}>Saída</option>
            </select>
          </div>
        </section>
        <button className="btnPrimary">Inserir Valor</button>
      </form>
    </>
  );
};
