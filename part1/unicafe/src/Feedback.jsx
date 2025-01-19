import FeedbackControl from "./FeedbackControl.jsx";
import Header from "./Header.jsx";

Feedback.POSITIVE = "positive";
Feedback.NEUTRAL = "neutral";
Feedback.NEGATIVE = "negative";

function Feedback({ header, feedback, setFeedback, setFeedbackGiven }) {

  return (
    <div id="feedback">
      <Header header={header} />
      <FeedbackControl
        feedback={feedback}
        setFeedback={setFeedback}
        setFeedbackGiven={setFeedbackGiven}
      />
    </div>
  );
}

export default Feedback;