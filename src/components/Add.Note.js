import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
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
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
