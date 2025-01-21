import { useEffect, useState } from "react";
import PhonebookComponent from "./components/PhonebookComponent.jsx";
import PhonebookControlComponent from "./components/PhonebookControlComponent.jsx";
import axios from "axios";
import PhonebookEntryObject from "./domain/PhonebookEntryObject.js";
import PhonebookUtil from "./domain/PhonebookUtil.js";
import PhonebookClient from "./client/PhonebookClient.js";

const phonebookClient = new PhonebookClient();

function App() {
  const [phonebook, setPhonebook] = useState([]);
  const [displayedPhonebook, setDisplayedPhonebook] = useState({
    items: [],
    properties: {
      isFiltered: false
    }
  });
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  function updatePhonebook(newPhonebook) {
    setPhonebook(newPhonebook);
    setDisplayedPhonebook(PhonebookUtil.phonebookToDisplayed(newPhonebook));
  }

  function fetchPersons() {
    phonebookClient
      .getAll()
      .then(persons => {
        const phonebook = persons.map(person => PhonebookEntryObject.fromJson(person));
        updatePhonebook(phonebook);
      })
  }

  useEffect(fetchPersons, [])

  return (
    <div>
      <PhonebookControlComponent
        phonebook={phonebook}
        setPhonebook={setPhonebook}
        updatePhonebook={updatePhonebook}
        displayedPhonebook={displayedPhonebook}
        setDisplayedPhonebook={setDisplayedPhonebook}
        newName={newName}
        setNewName={setNewName}
        newPhoneNumber={newPhoneNumber}
        setNewPhoneNumber={setNewPhoneNumber}
        phonebookClient={phonebookClient}
      />
      <PhonebookComponent
        phonebook={phonebook}
        updatePhonebook={updatePhonebook}
        displayedPhonebook={displayedPhonebook}
        phonebookClient={phonebookClient}
      />
    </div>
  );
}



export default App;
