function FeedbackStatisticsContent({ feedback }) {
  const listItems =
    <>
      {[...Object.entries(feedback)]
        .map(([feedbackType, count]) => <li>{feedbackType}: {count}</li>)}
    </>;

  return (
    <div id="feedback-statistics-content">
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

export default FeedbackStatisticsContent;