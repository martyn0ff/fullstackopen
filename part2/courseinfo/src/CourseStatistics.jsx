import CourseStatisticsItem from "./CourseStatisticsItem.jsx";
import Header2 from "./Header2.jsx";

function CourseStatistics({ course }) {
  return (
    <div>
      <Header2 header="Statistics" />
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
    .map(part => part.exercises)
    .reduce((totalCount, currentCount) => totalCount + currentCount, 0);
}

export default CourseStatistics;