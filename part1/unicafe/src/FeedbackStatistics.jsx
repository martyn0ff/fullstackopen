import Header from "./Header.jsx";
import FeedbackStatisticsContent from "./FeedbackStatisticsContent.jsx";

function FeedbackStatistics({ header, feedback, feedbackGiven }) {
  const statistics = [
    <Header key="header" header={header} />
  ];

  if (feedbackGiven) {
    statistics.push(
      <FeedbackStatisticsContent
        key="feedback-content"
        feedback={feedback}
      />
    );
  }
  else {
    statistics.push(
      <div key="no-feedback-given">No feedback was given yet!</div>
    )
  }

  return (
    <div id="feedback-statistics-container">
      {statistics}
    </div>
  )

}

export default FeedbackStatistics;