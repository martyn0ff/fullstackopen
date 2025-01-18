function Total(props) {
  const { parts } = props;

  return (
    <p>Number of exercises {parts.values().reduce((acc, curr) => acc + curr, 0)}</p>
  );
}

export default Total;