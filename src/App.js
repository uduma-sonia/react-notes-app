import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import { useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is my first note",
      date: "11/07/2021",
    },
    {
      id: nanoid(),
      text: "this is a react app",
      date: "11/07/2021",
    },
    {
      id: nanoid(),
      text: "using react hooks",
      date: "11/07/2021",
    },
  ]);

  const addNote = (text) => {
    console.log(text);
  };

  return (
    <div className="app-container">
      <NotesList notes={notes} />
    </div>
  );
};

export default App;
