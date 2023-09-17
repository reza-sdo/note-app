import React from "react";

function NoteList({ notes, onDelete, onCompleted, sortBy }) {
  let sortedNotes;

  if (sortBy === "latest") {
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createAt) - new Date(a.createAt)
    );
  }
  if (sortBy === "earliest") {
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createAt) - new Date(b.createAt)
    );
  }
  if (sortBy === "completed")
    // sortedNotes = [...notes].sort(
    //   (a, b) => Number(b.completed) - Number(a.completed)
    // );
    sortedNotes = notes.filter((n) => n.completed);

  return (
    <div className="note-list">
      {sortedNotes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          onCompleted={onCompleted}
        />
      ))}
    </div>
  );
}

function NoteItem({ note, onDelete, onCompleted }) {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  // console.log(note);

  return (
    <div className={`note-item ${note.completed ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button onClick={() => onDelete(note.id)}>❌</button>
          <input
            type="checkbox"
            name=""
            id={note.id}
            // onChange={() => onCompleted(note.id)}
            onChange={onCompleted}
          />
        </div>
      </div>
      <div className="note-item__footer" dir="rtl">
        {new Date(note.createAt).toLocaleDateString("fa-IR", options)}
      </div>
    </div>
  );
}

export default NoteList;
