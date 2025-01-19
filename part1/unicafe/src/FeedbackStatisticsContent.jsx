import Feedback from "./Feedback.jsx";
import StatisticLine from "./StatisticLine.jsx";

const score = {
  positive: 1,
  neutral: 0,
  negative: -1
};

function FeedbackStatisticsContent({ feedback }) {
  const listItems = [];
  const totalFeedbackSent = Object.values(feedback)
    .reduce((total, current) => total + current, 0);
  const averageFeedbackScore = calculateAverageFeedbackScore(feedback) || 0;
  const positiveFeedbackPercentage = calculatePositivePercentage(feedback) || 0;


  // Each feedback
  listItems.push(
    <>
      {[...Object.entries(feedback)]
        .map(([feedbackType, count]) => <StatisticLine text={feedbackType} value={count} />)}
    </>
  );

  // Total feedback
  listItems.push(
    <StatisticLine text="total" value={totalFeedbackSent} />
  );

  // Average score
  listItems.push(
    <StatisticLine text="average" value={averageFeedbackScore} />
  );

  // Positive score percentage
  listItems.push(
    <StatisticLine text="positive percentage" value={positiveFeedbackPercentage + "%"} />
  );

  function calculateAverageFeedbackScore(feedback) {
    let feedbackCount = 0;
    let totalWeight = 0;
    for (const [feedbackType, count] of Object.entries(feedback)) {
      feedbackCount += count;
      totalWeight += score[feedbackType] * count;
    }
    return totalWeight / feedbackCount;
  }

  function calculatePositivePercentage(feedback) {
    let feedbackCount = 0;
    let positiveCount = 0;
    for (const [feedbackType, count] of Object.entries(feedback)) {
      feedbackCount += count;
      if (feedbackType === Feedback.POSITIVE) {
        positiveCount += count;
      }
    }

    return (positiveCount / feedbackCount) * 100;
  }

  return (
    <div id="feedback-statistics-content">
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

export default FeedbackStatisticsContent;