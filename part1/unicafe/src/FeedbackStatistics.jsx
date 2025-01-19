import Header from "./Header.jsx";
import FeedbackStatisticsContent from "./FeedbackStatisticsContent.jsx";

function FeedbackStatistics({ header, feedback }) {
  return (
    <div id="feedback-statistics-container">
      <Header header={header} />
      <FeedbackStatisticsContent feedback={feedback} />
    </div>
  )
}

export default FeedbackStatistics;