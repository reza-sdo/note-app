import { useState } from "react";
import { useNotes } from "../context/NoteContext";
import { useSortDispatch } from "../context/SortByContext";

function NoteHeader() {
  const notes = useNotes();
  const dispatch = useSortDispatch();
  const [type, setType] = useState("latest");
  return (
    <div className="note-header">
      <h2>My Notes ({notes.length})</h2>
      <select
        name=""
        id=""
        value={type}
        onChange={(e) => {
          setType(e.target.value);
          dispatch(e.target.value);
        }}
      >
        <option value="latest">Sort based on latest notes </option>
        <option value="earliest">Sort based on earliest notes </option>
        <option value="completed">Sort based on completed notes</option>
      </select>
    </div>
  );
}

export default NoteHeader;
