import noteClient from "../client/NoteClient.js";

function NoteComponent({ note, notes, setNotes, noteClient }) {

  function handleOnClick() {
    async function updateImportance(note) {
      noteClient.update(note.id, {
        ...note,
        important: !note.important
      });
    }

    updateImportance(note).then(_ => {
      setNotes(notes.map(n => {
        return n.id === note.id ? n.withImportant(!note.important) : n;
      }));
    });
  }

  return (
    <li>
      {note.important && "⚠️ "}{note.content} <span>
      [<a
      href="#"
      onClick={handleOnClick}
    >
        toggle importance
      </a>]
      </span>
    </li>
  );
}

export default NoteComponent;