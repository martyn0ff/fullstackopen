function FeedbackButton({ bg, feedbackType, feedbackText, onClick }) {

  function handleOnClick() {

  }

  return (
    <button
      style={{ background: bg }}
      id={`feedback-${feedbackType}`}
      onClick={onClick}
    >
      {feedbackText}
    </button>
  )
}

export default FeedbackButton;