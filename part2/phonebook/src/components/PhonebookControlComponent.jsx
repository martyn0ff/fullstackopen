import HeaderComponent from "./HeaderComponent.jsx";
import AddNewPhonebookEntryFormComponent from "./AddNewPhonebookEntryFormComponent.jsx";
import FilterPhonebookComponent from "./FilterPhonebookComponent.jsx";

function PhonebookControlComponent({ phonebook, setPhonebook, setDisplayedPhonebook, newName, setNewName, newPhoneNumber, setNewPhoneNumber }) {

  return (
    <div id="phonebook-control">
      <HeaderComponent value="Phonebook" />
      <AddNewPhonebookEntryFormComponent
        phonebook={phonebook}
        setPhonebook={setPhonebook}
        setDisplayedPhonebook={setDisplayedPhonebook}
        newName={newName}
        setNewName={setNewName}
        newPhoneNumber={newPhoneNumber}
        setNewPhoneNumber={setNewPhoneNumber}
      />
      <br />
      <FilterPhonebookComponent
        phonebook={phonebook}
        setDisplayedPhonebook={setDisplayedPhonebook}
      />
    </div>
  );
}

export default PhonebookControlComponent;