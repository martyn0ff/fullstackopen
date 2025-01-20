import { useState, useRef } from "react";
import PhonebookComponent from "./components/PhonebookComponent.jsx";
import PhonebookControlComponent from "./components/PhonebookControlComponent.jsx";
import PhonebookEntryObject from "./classes/PhonebookEntryObject.js";

function App() {
  const [phonebook, setPhonebook] = useState([
    new PhonebookEntryObject("Arto Hellas", "040-1234567"),
    new PhonebookEntryObject("Jari Nieminen", "046-1239876"),
    new PhonebookEntryObject("Mikko Virtanen", "050-4445678"),
    new PhonebookEntryObject("Sanna Salminen", "045-5553344"),
    new PhonebookEntryObject("Liisa Korhonen", "044-3336789"),
    new PhonebookEntryObject("Liisa Mäkelä", "044-1112233"),
    new PhonebookEntryObject("Mikko Järvinen", "050-5551234"),
    new PhonebookEntryObject("Pekka Virtanen", "040-7777888"),
    new PhonebookEntryObject("Arto Vähänikkilä", "040-9876543"),
    new PhonebookEntryObject("Sari Salminen", "045-4441122")
  ]);
  const [displayedPhonebook, setDisplayedPhonebook] = useState(phonebook);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  return (
    <div>
      <PhonebookControlComponent
        phonebook={phonebook}
        setPhonebook={setPhonebook}
        setDisplayedPhonebook={setDisplayedPhonebook}
        newName={newName}
        setNewName={setNewName}
        newPhoneNumber={newPhoneNumber}
        setNewPhoneNumber={setNewPhoneNumber}
      />
      <PhonebookComponent
        displayedPhonebook={displayedPhonebook}
      />
    </div>
  );
}

export default App;
