import FeedbackButton from "./FeedbackButton.jsx";

function FeedbackControl({ feedback, setFeedback }) {
  const positive = "positive";
  const neutral = "neutral";
  const negative = "negative";


  function updateFeedback(feedbackType) {
    const newFeedback = {
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1
    };
    console.log(newFeedback);
    setFeedback(newFeedback);
  }

  return (
    <div id="feedback-control">
      <FeedbackButton
        onClick={() => updateFeedback(positive)}
        bg="lightgreen"
        feedbackType={positive}
        feedbackText="Good"
        feedback={feedback}
      />
      <FeedbackButton
        onClick={() => updateFeedback(neutral)}
        bg="grey"
        feedbackType={neutral}
        feedbackText="Neutral"
        feedback={feedback}
      />
      <FeedbackButton
        onClick={() => updateFeedback(negative)}
        bg="lightred"
        feedbackType={negative}
        feedbackText="Bad"
        feedback={feedback}
      />
    </div>
  );
}

export default FeedbackControl;