function PhonebookEntryComponent({ entry }) {
  return <li key={entry.value.id}><strong>{buildJsx(entry)}</strong>: {entry.value.phoneNumber}</li>;
}

function buildJsx(entry) {
  // no highlighting if there are no ranges
  if (entry.properties.highlightedRanges.length === 0) {
    return entry.value.name;
  }

  const jsxBuilder = [];
  let i = 0;
  let keyIdx = 0;
  for (const range of entry.properties.highlightedRanges) {
    const plainText = <span key={entry.value.id + "-" + keyIdx++}>
      {entry.value.name.slice(i, range.start)}
    </span>;
    const markedText = <mark key={entry.value.id + "-" + keyIdx++}>
      {entry.value.name.slice(range.start, range.end+1)}
    </mark>
    jsxBuilder.push(plainText);
    jsxBuilder.push(markedText);
    i = range.end+1;
  }
  // handle case where highlighted text
  // is not at the end of a name
  if (i <= entry.value.name.length - 1) {
    jsxBuilder.push(<span key={entry.value.id + "-" + keyIdx++}>{entry.value.name.slice(i)}</span>);
  }
  return jsxBuilder;
}

export default PhonebookEntryComponent;