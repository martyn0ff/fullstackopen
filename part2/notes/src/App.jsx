import { useEffect, useState } from "react";
import NotesControlComponent from "./components/NotesControlComponent.jsx";
import NotesComponent from "./components/NotesComponent.jsx";
import NoteObject from "./domain/NoteObject.js";
import NoteClient from "./client/NoteClient.js";

const noteClient = new NoteClient();

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    noteClient
      .getAll()
      .then(notes => {
        setNotes(notes.map(note => new NoteObject(
          +note.id,
          note.content,
          note.important)))
      })
  }, []);

  return (
    <div>
      <h1>Notes</h1>
      <NotesControlComponent
        notes={notes}
        setNotes={setNotes}
        newNote={newNote}
        setNewNote={setNewNote}
      />
      <br />
      <NotesComponent
        notes={notes}
        setNotes={setNotes}
        noteClient={noteClient}
      />
    </div>
  );
}

export default App;