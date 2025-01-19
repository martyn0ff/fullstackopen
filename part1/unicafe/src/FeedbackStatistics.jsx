import Header from "./Header.jsx";
import FeedbackStatisticsContent from "./FeedbackStatisticsContent.jsx";

function FeedbackStatistics({ header, feedback, feedbackGiven }) {
  const statistics = [
    <Header header={header} />
  ];

  if (feedbackGiven) {
    statistics.push(<FeedbackStatisticsContent feedback={feedback} />);

  }
  else {
    statistics.push(<div>No feedback was given yet!</div>)
  }

  return (
    <div id="feedback-statistics-container">
      {statistics}
    </div>
  )

}

export default FeedbackStatistics;