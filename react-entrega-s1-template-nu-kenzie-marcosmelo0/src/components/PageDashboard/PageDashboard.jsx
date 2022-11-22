import React from "react";
import { Filter } from "../Filter";
import { EmptyList } from "../EmptyList";
import "../Inputs/inputs.css";
import "../Filter/index.css";
import "../EmptyList/index.css";
import "./style.css";
import { Form } from "../FormEntrys";
import { EntriesList } from "../EntriesList";
import { ValueTotal } from "../ValueTotal";

const PageDashboard = ({
  entriesList,
  addEntry,
  removeEntry,
  setFilter,
  filter,
}) => {
  return (
    <section className="main">
      <div>
        <Form addEntry={addEntry} />
        <Filter setFilter={setFilter} />
        {entriesList.length ? (
          <>
            <ValueTotal entriesList={entriesList} />
            <EntriesList
              entriesList={entriesList}
              removeEntry={removeEntry}
              filter={filter}
            />
          </>
        ) : (
          <>
            <EmptyList />
          </>
        )}
      </div>
    </section>
  );
};

export default PageDashboard;
