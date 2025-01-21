import NoteComponent from "./NoteComponent.jsx";
import { useState } from "react";

function NotesComponent({ notes, setNotes, noteClient }) {
  const [showImportantOnly, setShowImportantOnly] = useState(false);

  return (
    <>
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
            <NoteComponent
              key={note.id}
              note={note}
              notes={notes}
              setNotes={setNotes}
              noteClient={noteClient}
            />
          )}
      </ul>
    </>
  );
}

export default NotesComponent;