import { useRef } from "react";

Note.newNote = function(id, content, important) {
  return {
    id: id,
    content: content,
    important: important
  }
}

function Note({ note }) {
  return (
    <li>{note.important && "⚠️ "}{note.content}</li>
  )
}

export default Note