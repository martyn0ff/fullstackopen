function CourseStatisticsItem({ course, fn, statisticsId, description }) {
  const value = fn(course);
  return (
    <li key={statisticsId}><strong>{description}</strong>: {value}</li>
  );
}

export default CourseStatisticsItem;