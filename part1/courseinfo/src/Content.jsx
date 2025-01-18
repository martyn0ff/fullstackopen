import Part from "./Part.jsx";

function Content(props) {
  const { parts } = props;

  return (
    <>
      {parts.map(part => (
        <Part part={part.name} exercises={part.exercises}/>
      ))}
    </>
  );
}

export default Content;