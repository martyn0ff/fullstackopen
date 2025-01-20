import { useState } from "react";
import Phonebook from "./components/Phonebook.jsx";
import PhonebookControl from "./components/PhonebookControl.jsx";
import PhonebookEntry from "./components/PhonebookEntry.jsx";

function App() {
  const [phonebook, setPhonebook] = useState([
    PhonebookEntry.newEntry("Arto Hellas")
  ]);
  const [newName, setNewName] = useState("");

  return (
    <div>
      <PhonebookControl
        phonebook={phonebook}
        setPhonebook={setPhonebook}
        newName={newName}
        setNewName={setNewName}
      />
      <Phonebook phonebook={phonebook} />
    </div>
  );
}

export default App;
