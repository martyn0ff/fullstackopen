import HeaderComponent from "./HeaderComponent.jsx";
import PhonebookEntryComponent from "./PhonebookEntryComponent.jsx";

function PhonebookComponent({ displayedPhonebook }) {
  return (
    <div id='phonebook'>
      <HeaderComponent value="Numbers" />
      <ul>
        {displayedPhonebook.map(entry =>
          <PhonebookEntryComponent key={entry.id} entry={entry} />
        )}
      </ul>
    </div>
  );
}

export default PhonebookComponent;