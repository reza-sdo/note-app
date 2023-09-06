import React from "react";

function NoteList({ notes  , onDelete}) {
    return (
        <div className="note-list">
            {notes.map((note) => (
                <NoteItem key={note.id} note={note} onDelete={onDelete} />
            ))}
        </div>
    );
}

function NoteItem({ note, onDelete }) {
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
    };

    return (
        <div className="note-item">
            <div className="note-item__header">
                <div>
                    <p className="title">{note.title}</p>
                    <p className="desc">{note.description}</p>
                </div>
                <div className="actions">
                    <button onClick={()=>onDelete(note.id)}>❌</button>
                    <input type="checkbox" name="" id="" />
                </div>
            </div>
            <div className="note-item__footer" dir="rtl">
                {new Date(note.createAt).toLocaleDateString("fa-IR", options)}
            </div>
        </div>
    );
}

export default NoteList;
