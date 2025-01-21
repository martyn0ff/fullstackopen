import { useEffect, useState } from "react";
import PhonebookComponent from "./components/PhonebookComponent.jsx";
import PhonebookControlComponent from "./components/PhonebookControlComponent.jsx";
import axios from "axios";
import PhonebookEntryObject from "./classes/PhonebookEntryObject.js";
import PhonebookUtil from "./classes/PhonebookUtil.js";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

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

  function fetchPersons() {
    async function doFetchPersons() {
      const response = await axios.get(`${baseUrl}/persons`);
      const phonebook = response.data.map(person => PhonebookEntryObject.fromJson(person));
      setPhonebook(phonebook);
      setDisplayedPhonebook(PhonebookUtil.phonebookToDisplayed(phonebook));
      return new Promise(resolve => resolve());
    }

    doFetchPersons();
  }

  useEffect(fetchPersons, [])

  return (
    <div>
      <PhonebookControlComponent
        phonebook={phonebook}
        setPhonebook={setPhonebook}
        displayedPhonebook={displayedPhonebook}
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
