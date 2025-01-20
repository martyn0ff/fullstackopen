import Header from "./Header.jsx";
import PhonebookEntry from "./PhonebookEntry.jsx";

function PhonebookControl({ phonebook, setPhonebook, newName, setNewName }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const entry = PhonebookEntry.newEntry(form.newName.value);
    setPhonebook(phonebook.concat(entry));
    setNewName("");
  }

  function handleOnNameChange(event) {
    const input = event.target;
    setNewName(input.value);
  }

  return (
    <div id="phonebook-control">
      <Header value="Phonebook" />
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

export default PhonebookControl;