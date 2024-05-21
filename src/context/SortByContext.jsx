import { createContext, useContext, useState } from "react";
import React from "react";

const sortedContext = createContext();
const sortedDispatcher = createContext();

export const SortProvider = ({ children }) => {
  const [sortState, setSortState] = useState();

  return (
    <sortedContext.Provider value={sortState}>
      <sortedDispatcher.Provider value={setSortState}>
        {children}
      </sortedDispatcher.Provider>
    </sortedContext.Provider>
  );
};

export const useSortByContext = () => {
  return useContext(sortedContext);
};
export const useSortDispatch = () => {
  return useContext(sortedDispatcher);
};
