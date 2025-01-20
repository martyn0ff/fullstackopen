import Part from "./Part.jsx";

function Course({ course }) {
  const courseListItems = course.parts.map((part) =>
    <Part part={part} />
  );

  return (
    <ul>
      {courseListItems}
    </ul>
  );
}

export default Course;