import Header1 from "./Header1.jsx";
import Course from "./Course.jsx";
import CourseStatistics from "./CourseStatistics.jsx";

function App() {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const coursesJsx = courses.map((course, idx) => {
    const isLastCourse = idx === courses.length - 1;
    return (
      <>
        <Header1 header={course.name} />
        <Course course={course} />
        <CourseStatistics course={course} />
        {!isLastCourse && <hr/>}
      </>
    );
  })

  return (
    <div>
      {coursesJsx}
    </div>
  );

}

export default App;
