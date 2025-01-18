import Part from "./Part.jsx";

function Content(props) {
  const { parts } = props;

  return (
    <>
      {[...parts.entries()].map(([part, exercises]) => (
        <Part part={part} exercises={exercises}/>
      ))}
    </>
  );
}

export default Content;