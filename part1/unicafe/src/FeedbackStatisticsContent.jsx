import Feedback from "./Feedback.jsx";
import StatisticRow from "./StatisticLine.jsx";

const score = {
  positive: 1,
  neutral: 0,
  negative: -1
};

function FeedbackStatisticsContent({ feedback }) {
  const rows = [];
  const totalFeedbackSent = Object.values(feedback)
    .reduce((total, current) => total + current, 0);
  const averageFeedbackScore = calculateAverageFeedbackScore(feedback) || 0;
  const positiveFeedbackPercentage = calculatePositivePercentage(feedback) || 0;


  // Each feedback
  rows.push(
    <>
      {[...Object.entries(feedback)]
        .map(([feedbackType, count]) => (
          <StatisticRow
            key={feedbackType}
            header={feedbackType}
            value={count}
          />
        ))}
    </>
  );

  // Total feedback
  rows.push(
    <StatisticRow
      key="total"
      header="total"
      value={totalFeedbackSent}
    />
  );

  // Average score
  rows.push(
    <StatisticRow
      key="average"
      header="average"
      value={averageFeedbackScore}
    />
  );

  // Positive score percentage
  rows.push(
    <StatisticRow
      key="positive-percentage"
      header="positive percentage"
      value={positiveFeedbackPercentage + "%"}
    />
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
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  )
}

export default FeedbackStatisticsContent;