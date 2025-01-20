import { useState } from "react";
import PhonebookComponent from "./components/PhonebookComponent.jsx";
import PhonebookControlComponent from "./components/PhonebookControlComponent.jsx";
import PhonebookEntryObject from "./classes/PhonebookEntryObject.js";

function App() {
  const [phonebook, setPhonebook] = useState([
    new PhonebookEntryObject("Arto Hellas")
  ]);
  const [newName, setNewName] = useState("");

  return (
    <div>
      <PhonebookControlComponent
        phonebook={phonebook}
        setPhonebook={setPhonebook}
        newName={newName}
        setNewName={setNewName}
      />
      <PhonebookComponent phonebook={phonebook} />
    </div>
  );
}

export default App;
