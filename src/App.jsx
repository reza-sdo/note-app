import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import React, { useState } from "react";
function App() {
    const [notes, setNotes] = useState([]);

    const handelNote = (newNote) => {
        setNotes((prevNots) => [...prevNots, newNote]);
    };

    const handelDeleteNote = (id) => {
        // const filteredNotes = notes.filter(n => n.id !== id);
        // setNotes(filteredNotes);
        setNotes((prevN) => prevN.filter((n) => n.id !== id));
    };

    const handelCompleted = (e) => {
        // const completedNote = notes.map((n) =>
        //     n.id === +e.target.id ? { ...n, completed: !n.completed } : n
        // );
        // setNotes(completedNote);

        setNotes((prevN) =>
            notes.map((n) =>
                n.id === +e.target.id ? { ...n, completed: !n.completed } : n
            )
        );
    };
    return (
        <div className="container">
            <div className="note-header">note header</div>
            <div className="note-app">
                <AddNewNote onHandelNotes={handelNote} />
                <div className="note-container">
                    <NoteList
                        notes={notes}
                        onDelete={handelDeleteNote}
                        onCompleted={handelCompleted}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
