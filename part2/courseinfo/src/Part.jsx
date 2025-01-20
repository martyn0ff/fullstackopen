function Part({ part }) {
  return (
    <li key={part.id}>
      <strong>{part.name}</strong>: {part.exercises} exercises
    </li>
  );
}

export default Part;