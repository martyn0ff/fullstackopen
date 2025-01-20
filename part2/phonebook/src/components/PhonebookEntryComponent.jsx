function PhonebookEntryComponent({ entry }) {
  return <li>{entry.name}: {entry.phoneNumber}</li>;
}

export default PhonebookEntryComponent;