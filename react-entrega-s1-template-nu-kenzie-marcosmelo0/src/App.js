import "./App.css";
import "./components/PageDashboard/style.css";
import PageDashboard from "./components/PageDashboard/PageDashboard";
import { useState } from "react";
import { PageHome } from "./components/PageHome/index.jsx";
import { Header } from "./components/Header";
import { entriesData } from "./components/Data/data";

function App() {
  const [logado, setLogado] = useState(false);

  const [entriesList, setEntriesList] = useState(entriesData);
  const [filter, setFilter] = useState("");

  const addEntry = (entryData) => {
    setEntriesList([...entriesList, entryData]);
  };

  const removeEntry = (entryID) => {
    const newEntries = entriesList.filter((entry) => entry.id !== entryID);
    setEntriesList(newEntries);
  };

  const filteredEntries = entriesList.filter((entry) =>
    filter === "todos" ? true : entry.typeEntry === filter
  );

  return (
    <div className="App">
      {!logado ? (
        <PageHome login={setLogado} />
      ) : (
        <>
          <Header login={setLogado} />
          <PageDashboard
            entriesList={entriesList}
            login={setLogado}
            addEntry={addEntry}
            removeEntry={removeEntry}
            setFilter={setFilter}
            filter={filteredEntries}
          />
        </>
      )}
    </div>
  );
}

export default App;
