import { createContext, useContext, useReducer } from "react";
const INITIAL_STATE = [];
const NotesContext = createContext(null);
const NotesDispatchContext = createContext(null);
const reducerFunction = (state, { type, payload }) => {
  switch (type) {
    case "newNote":
      return [...state, payload];
    case "delete":
      return state.filter((note) => note.id !== payload);
    case "completed":
      return state.map((note) =>
        note.id === +payload.target.id
          ? { ...note, completed: !note.completed }
          : note
      );

    default:
      console.log("this type not supported", type);
      return state;
  }
};
export function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(reducerFunction, INITIAL_STATE);

  return (
    <NotesDispatchContext.Provider value={dispatch}>
      <NotesContext.Provider value={notes}>{children}</NotesContext.Provider>
    </NotesDispatchContext.Provider>
  );
}

export function useNotes() {
  return useContext(NotesContext);
}
export function useNotesDispatch() {
  return useContext(NotesDispatchContext);
}
