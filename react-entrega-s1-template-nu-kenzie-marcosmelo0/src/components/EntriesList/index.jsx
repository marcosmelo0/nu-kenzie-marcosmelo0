import React from "react";
import { EntriesCard } from "./EntriesCard";
import styles from "./index.css";

export const EntriesList = ({ entriesList, removeEntry, filter }) => {
  return (
    <>
      {
        <ul className={styles.ul}>
          {filter.length === 0
            ? entriesList.map((entries, index) => (
                <EntriesCard
                  id={index}
                  entries={entries}
                  removeEntry={removeEntry}
                  filter={filter}
                />
              ))
            : filter.map((entries, index) => (
                <EntriesCard
                  id={index}
                  entries={entries}
                  removeEntry={removeEntry}
                  filter={filter}
                />
              ))}
        </ul>
      }
    </>
  );
};
