import HeaderComponent from "./HeaderComponent.jsx";
import PhonebookEntryComponent from "./PhonebookEntryComponent.jsx";

function PhonebookComponent({ phonebook }) {
  return (
    <div id='phonebook'>
      <HeaderComponent value="Numbers" />
      <ul>
        {phonebook.map(entry =>
          <PhonebookEntryComponent key={entry.id} entry={entry} />
        )}
      </ul>
    </div>
  );
}

export default PhonebookComponent;