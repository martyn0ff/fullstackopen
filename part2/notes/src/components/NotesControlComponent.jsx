import NoteComponent from "./NoteComponent.jsx";

function NotesControlComponent({ notes, setNotes, newNote, setNewNote }) {

  function addNote(event) {
    event.preventDefault();
    const form = event.target;
    const newNote = NoteComponent.newNote(9999, form.addNote.value, randomImportant())
    setNotes(notes.concat(newNote));
  }

  function randomImportant() {
    return Math.random() >= 0.5;
  }

  function onNoteInputChange(event) {
    setNewNote(event.target.value);
  }

  return (
    <form onSubmit={addNote}>
      <input
        name="addNoteInput"
        placeholder="Add Note..."
        value={newNote}
        onChange={onNoteInputChange}
      />
      <button type="submit">save</button>
    </form>
  )
}

export default NotesControlComponent;