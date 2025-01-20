let lastId = 1;

PhonebookEntry.idGenerator = () => lastId++;
PhonebookEntry.newEntry = function(name) {
  return {
    id: PhonebookEntry.idGenerator(),
    name: name
  }
}

function PhonebookEntry({ entry }) {
  return <li>{entry.name}</li>;
}

export default PhonebookEntry;