import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import React, { useReducer, useState } from "react";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";

const INITIAL_STATE = [];
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
      console.log("this type not supported" , type);
      return state;
  }
};

function App() {
  // const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE);

  const newNoteHandler = (newNote) => {
    // setNotes((prevNots) => [...prevNots, newNote]);
    dispatch({ type: "newNote", payload: newNote });
  };

  const deleteNoteHandler = (id) => {
    // const filteredNotes = notes.filter(n => n.id !== id);
    // setNotes(filteredNotes);
    // setNotes((prevN) => prevN.filter((n) => n.id !== id));
    dispatch({
      type: "delete",
      payload: id,
    });
  };

  const completedNoteHandler = (event) => {
    // const completedNote = notes.map((n) =>
    //     n.id === +e.target.id ? { ...n, completed: !n.completed } : n
    // );
    // setNotes(completedNote);

    // setNotes((prevN) =>
    //   prevN.map((n) =>
    //     n.id === +event.target.id ? { ...n, completed: !n.completed } : n
    //   )
    // );

    dispatch({ type: "completed", payload: event });
  };

  return (
    <div className="container">
      <NoteHeader
        notes={state}
        sortBy={sortBy}
        onSort={(e) => setSortBy(e.target.value)}
      />
      <div className="note-app">
        <AddNewNote onNewNoteHandler={newNoteHandler} />
        <div className="note-container">
          <NoteStatus notes={state} />
          <NoteList
            sortBy={sortBy}
            notes={state}
            onDelete={deleteNoteHandler}
            onCompleted={completedNoteHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
