import Header from "./Header.jsx";
import PhonebookEntry from "./PhonebookEntry.jsx";

function Phonebook({ phonebook }) {
  return (
    <div id='phonebook'>
      <Header value="Numbers" />
      <ul>
        {phonebook.map(entry =>
          <PhonebookEntry key={entry.id} entry={entry} />
        )}
      </ul>
    </div>
  );
}

export default Phonebook;