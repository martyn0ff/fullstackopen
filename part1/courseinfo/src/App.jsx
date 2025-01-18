import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Total from "./Total.jsx";

function App() {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const parts = [part1, part2, part3];

  return (
    <div>
      <Header header={course} />
      <Content parts={parts} />
      <hr/>
      <Total parts={parts} />
    </div>
  );
}

export default App;
