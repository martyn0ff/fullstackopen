import { useState } from "react";

function FilterPhonebookComponent({ phonebook, setDisplayedPhonebook }) {

  const [newFilterValue, setNewFilterValue] = useState("");

  function normalize(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  function handleOnFilterInput(event) {
    const filterValue = event.target.value;
    if (filterValue === "") {
      setDisplayedPhonebook(phonebook);
    }
    else {
      const filteredPhonebook = phonebook.filter(entry =>
        normalize(entry.name).toLowerCase().includes(normalize(filterValue).toLowerCase()));
      setDisplayedPhonebook(filteredPhonebook);
    }
    setNewFilterValue(filterValue);
  }

  return (
    <div
      id="phonebook-search"
      style={{
        alignItems: "flex-start",
        width: "300px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label htmlFor="phonebook-search-input">Filter by name</label>
      <input
        placeholder="Enter a name to filter by..."
        name="filter"
        type="search"
        onInput={handleOnFilterInput}
        value={newFilterValue}
      />
    </div>
  );
}

export default FilterPhonebookComponent;