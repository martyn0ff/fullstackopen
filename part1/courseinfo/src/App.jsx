import Header from "./Header.jsx";
import Content from "./Content.jsx";

function App() {
  const course = "Half Stack Application Development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const map = new Map();
  map.set(part1, exercises1);
  map.set(part2, exercises2);
  map.set(part3, exercises3);

  return (
    <div>
      <Header header={course} />
      <Content parts={map} />
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
}

export default App;
