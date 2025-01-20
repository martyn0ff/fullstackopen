import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import Note from "./components/Note.jsx";

const notes = [
  Note.newNote(1, "HTML is easy", true),
  Note.newNote(2, "Browser can execute only JavaScript", false),
  Note.newNote(3, "GET and POST are the most important methods of HTTP protocol", true),
]

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App notes={notes} />
)