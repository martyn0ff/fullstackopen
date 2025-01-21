import PhonebookEntryObject from "../domain/PhonebookEntryObject.js";
import PhonebookUtil from "../domain/PhonebookUtil.js";

function AddNewPhonebookEntryFormComponent({ phonebook, updatePhonebook, newName, setNewName, newPhoneNumber, setNewPhoneNumber, phonebookClient }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const entry = new PhonebookEntryObject(
      form.newName.value,
      form.newPhoneNumber.value,
    );

    const alreadyExistingIdx = phonebook.findIndex(e => e.name === entry.name);
    if (alreadyExistingIdx !== -1) {
      const alreadyExistingEntry = phonebook[alreadyExistingIdx];
      const isNewPhoneNumberConfirmed = confirm(`This name already exists in phonebook. Do you want to update the phone number?`);
      if (isNewPhoneNumberConfirmed) {
        phonebookClient
          .update(alreadyExistingEntry.id, new PhonebookEntryObject(entry.name, entry.phoneNumber))
          .then(updatedEntry => {
            const newPhonebook = phonebook.map(e => e.id === updatedEntry.id ? updatedEntry : e);
            updatePhonebook(newPhonebook);
          })
      }
    }
    else {
      phonebookClient
        .save(entry)
        .then(entry => {
          const newPhonebook = phonebook.concat(entry);
          updatePhonebook(newPhonebook);
          setNewName("");
          setNewPhoneNumber("");
        })
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
  );
}

export default AddNewPhonebookEntryFormComponent;