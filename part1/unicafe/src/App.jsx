import Feedback from "./Feedback.jsx";
import FeedbackStatistics from "./FeedbackStatistics.jsx";
import { useState } from "react";

function App() {
  const feedbackHeader = "Unicafe Feedback";
  const statisticsHeader = "Statistics";
  const [feedback, setFeedback] = useState({
    [Feedback.POSITIVE]: 0,
    [Feedback.NEUTRAL]: 0,
    [Feedback.NEGATIVE]: 0
  });
  const [feedbackGiven, setFeedbackGiven] = useState(false);

  return (
    <>
      <Feedback
        header={feedbackHeader}
        feedback={feedback}
        setFeedback={setFeedback}
        setFeedbackGiven={setFeedbackGiven}
      />
      <FeedbackStatistics
        header={statisticsHeader}
        feedback={feedback}
        feedbackGiven={feedbackGiven}
      />
    </>
  );
}

export default App;
