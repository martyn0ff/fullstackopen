import Header from "./CourseHeader.jsx";
import CourseStatisticsItem from "./CourseStatisticsItem.jsx";

function CourseStatistics({ course }) {
  return (
    <div>
      <Header header="Statistics" />
      <ul>
        <CourseStatisticsItem
          course={course}
          fn={calculateTotalExercisesCount}
          statisticsId="totalExercisesCount"
          description="Total Exercises"
        />
      </ul>
    </div>
  );
}

function calculateTotalExercisesCount(courses) {
  return courses.parts
    .map(part => part.exercisesCount)
    .reduce((totalCount, currentCount) => totalCount + currentCount, 0);
}

export default CourseStatistics;