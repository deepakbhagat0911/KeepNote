import { createContext, useState } from "react";
export const DataContext = createContext(null);
export const DataProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [archiveNotes, setArchivNotes] = useState([]);
  const [deleteNotes, setDeleteNotes] = useState([]);
  return (
    <DataContext.Provider
      value={{
        notes,
        setNotes,
        archiveNotes,
        setArchivNotes,
        deleteNotes,
        setDeleteNotes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;
