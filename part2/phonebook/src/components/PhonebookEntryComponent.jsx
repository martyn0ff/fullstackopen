function PhonebookEntryComponent({ entry }) {
  return <li><strong>{entry.name}</strong>: {entry.phoneNumber}</li>;
}

export default PhonebookEntryComponent;