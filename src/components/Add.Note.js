import { useState } from "react";

const AddNote = () => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };
  return (
    <div className="note new">
      <textarea
        row="8"
        cols="10"
        placeholder="add new note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>200 remaining</small>
        <button className="save">Save</button>
      </div>
    </div>
  );
};

export default AddNote;
