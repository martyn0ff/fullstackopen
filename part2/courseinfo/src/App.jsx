import Header from "./CourseHeader.jsx";
import Course from "./Course.jsx";
import CourseStatistics from "./CourseStatistics.jsx";

function App() {
  const course = {
    name: "Half Stack Application Development",
    parts: [
      {
        name: "Fundamentals of React",
        exercisesCount: 10,
        id: "part1"
      },
      {
        name: "Using props to pass data",
        exercisesCount: 7,
        id: "part2"
      },
      {
        name: "State of a component",
        exercisesCount: 14,
        id: "part3"
      }
    ]
  }

  return (
    <div>
      <Header header={course.name} />
      <Course course={course} />
      <CourseStatistics course={course} />
    </div>
  );

}

export default App;
