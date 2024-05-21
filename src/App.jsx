import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import React, { useReducer, useState } from "react";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
import { NotesProvider, useNotesDispatch } from "./context/NoteContext";
import { SortProvider } from "./context/SortByContext";

function App() {
  return (
    <SortProvider>
      <NotesProvider>
        <div className="container">
          <NoteHeader />
          <div className="note-app">
            <AddNewNote />
            <div className="note-container">
              <NoteStatus />
              <NoteList />
            </div>
          </div>
        </div>
      </NotesProvider>
    </SortProvider>
  );
}

export default App;
