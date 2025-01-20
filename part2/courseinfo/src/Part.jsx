function Part({ part }) {
  return (
    <li key={part.id}>
      <strong>{part.name}</strong>: {part.exercisesCount} exercises
    </li>
  );
}

export default Part;