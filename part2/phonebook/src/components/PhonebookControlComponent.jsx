import HeaderComponent from "./HeaderComponent.jsx";
import PhonebookEntryObject from "../classes/PhonebookEntryObject.js";

function PhonebookControlComponent({ phonebook, setPhonebook, newName, setNewName, newPhoneNumber, setNewPhoneNumber }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const entry = new PhonebookEntryObject(
      form.newName.value,
      form.newPhoneNumber.value,
    );
    if (phonebook.some(e => e.equals(entry))) {
      alert(`This entry already exists in phonebook.`);
    }
    else {
      setPhonebook(phonebook.concat(entry));
      setNewName("");
    }
  }

  function handleOnNameChange(event) {
    const input = event.target;
    setNewName(input.value);
  }

  function handleOnPhoneNumberChange(event) {
    const input = event.target;
    setNewPhoneNumber(input.value);
  }

  return (
    <div id="phonebook-control">
      <HeaderComponent value="Phonebook" />
      <form
        onSubmit={handleSubmit}
      >
        <div
          style={{
            alignItems: "flex-start",
            width: "300px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label htmlFor="newName">Name</label>
          <input
            placeholder="Enter a name..."
            type="text"
            name="newName"
            value={newName}
            onChange={handleOnNameChange}
          />
          <br />
          <label htmlFor="newPhoneNumber">Phone number</label>
          <input
            placeholder="Enter a phone number..."
            type="text"
            name="newPhoneNumber"
            value={newPhoneNumber}
            onChange={handleOnPhoneNumberChange}
          />
          <button
            type="submit"
          >
            Add entry
          </button>
        </div>
      </form>
    </div>
  );
}

export default PhonebookControlComponent;