import Feedback from "./Feedback.jsx";
import FeedbackStatistics from "./FeedbackStatistics.jsx";
import { useState } from "react";

function App() {
  const feedbackHeader = "Unicafe Feedback";
  const statisticsHeader = "Statistics";
  const [feedback, setFeedback] = useState({
    positive: 0,
    neutral: 0,
    negative: 0
  });

  return (
    <>
      <Feedback
        header={feedbackHeader}
        feedback={feedback}
        setFeedback={setFeedback}
      />
      <FeedbackStatistics
        header={statisticsHeader}
        feedback={feedback}
      />
    </>
  );
}

export default App;
