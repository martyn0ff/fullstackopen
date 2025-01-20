import { useState } from "react";
import PhonebookComponent from "./components/PhonebookComponent.jsx";
import PhonebookControlComponent from "./components/PhonebookControlComponent.jsx";
import PhonebookEntryObject from "./classes/PhonebookEntryObject.js";

function App() {
  const [phonebook, setPhonebook] = useState([
    new PhonebookEntryObject("Arto Hellas", "623-349-231")
  ]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  return (
    <div>
      <PhonebookControlComponent
        phonebook={phonebook}
        setPhonebook={setPhonebook}
        newName={newName}
        setNewName={setNewName}
        newPhoneNumber={newPhoneNumber}
        setNewPhoneNumber={setNewPhoneNumber}
      />
      <PhonebookComponent phonebook={phonebook} />
    </div>
  );
}

export default App;
