import Note from "./components/Note.jsx";
import { useState } from "react";

function App({ notes: initialNotes }) {
  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState("");
  const [showImportantOnly, setShowImportantOnly] = useState(false);
  const lastId = initialNotes[initialNotes.length - 1].id;

  function addNote(event) {
    event.preventDefault();
    const form = event.target;
    const newNote = Note.newNote(lastId+1, form.addNote.value, randomImportant())
    setNotes(notes.concat(newNote));
  }

  function randomImportant() {
    return Math.random() >= 0.5;
  }

  function onNoteInputChange(event) {
    setNewNote(event.target.value);
  }

  return (
    <div>
      <h1>Notes</h1>
      <input
        name="showAll"
        type="checkbox"
        checked={showImportantOnly}
        onChange={() => setShowImportantOnly(!showImportantOnly)}
      />
      Show important only
      <ul>
        {notes
          .filter(note => showImportantOnly ? note.important : true)
          .map(note =>
          <Note
            key={note.id}
            note={note}
          />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          name="addNoteInput"
          placeholder="Add Note"
          value={newNote}
          onChange={onNoteInputChange}
        />
        <button type="submit">save</button>
      </form>
    </div>
  );
}

export default App;