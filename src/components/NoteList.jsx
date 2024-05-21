import { useNotes, useNotesDispatch } from "../context/NoteContext";
import { useSortByContext } from "../context/SortByContext";

function NoteList() {
  const notes = useNotes();
  const sortBy = useSortByContext();
  console.log(sortBy);
  let sortedNotes = notes;

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
  if (sortBy === "completed") sortedNotes = notes.filter((n) => n.completed);

  return (
    <div className="note-list">
      {sortedNotes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}

function NoteItem({ note }) {
  const dispatch = useNotesDispatch();

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
          <button
            onClick={() =>
              dispatch({
                type: "delete",
                payload: note.id,
              })
            }
          >
            ❌
          </button>
          <input
            type="checkbox"
            name=""
            id={note.id}
            // onChange={() => onCompleted(note.id)}
            onChange={(event) => {
              dispatch({ type: "completed", payload: event });
            }}
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
