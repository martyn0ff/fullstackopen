function Content(props) {
  const { parts } = props;

  return (
    <>
      {[...parts.entries()].map(([part, exercises]) => (
        <p>{part}: {exercises}</p>
      ))}
    </>
  );
}

export default Content;