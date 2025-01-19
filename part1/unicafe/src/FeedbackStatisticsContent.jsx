import Feedback from "./Feedback.jsx";
import { useState } from "react";

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
        .map(([feedbackType, count]) => <li>{feedbackType}: {count}</li>)}
    </>
  );

  // Total feedback
  listItems.push(
    <li>Total: {totalFeedbackSent}</li>
  );

  // Average score
  listItems.push(
    <li>Average: {averageFeedbackScore}</li>
  );

  // Positive score percentage
  listItems.push(
    <li>Positive: {positiveFeedbackPercentage}%</li>
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