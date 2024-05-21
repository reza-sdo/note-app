import React, { useState } from "react";
import { useNotesDispatch } from "../context/NoteContext";

function AddNewNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useNotesDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("No No");
      return;
    }
    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createAt: new Date().toISOString(),
    };
    dispatch({ type: "newNote", payload: newNote });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="add-new-note">
      <h2>Add new Note</h2>
      <form className="note-form" onSubmit={handelSubmit}>
        <input
          value={title}
          placeholder="Note Title"
          type="text"
          className="text-field"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="text-field"
          placeholder="Note Description ..."
        />
        <button type="submit" className="btn btn--primary">
          Add New Note!
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
