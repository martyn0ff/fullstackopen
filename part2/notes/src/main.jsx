import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import NoteComponent from "./components/NoteComponent.jsx";
import NoteObject from "./domain/NoteObject.js";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App />
)