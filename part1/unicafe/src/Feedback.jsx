import FeedbackControl from "./FeedbackControl.jsx";
import Header from "./Header.jsx";

function Feedback({ header, feedback, setFeedback }) {
  return (
    <div id="feedback">
      <Header header={header} />
      <FeedbackControl
        feedback={feedback}
        setFeedback={setFeedback}
      />
    </div>
  );
}

export default Feedback;