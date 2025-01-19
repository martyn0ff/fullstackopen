function AnecdoteControl({ anecdotes, selected, setSelected, votes, setVotes }) {
  function setRandomSelected(anecdotes) {
    const randomIdx = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIdx);
  }

  function voteFor(selected) {
    setVotes({
      ...votes,
      [selected]: (votes[selected] || 0) + 1
    })
  }

  return (
    <div id="anecdotes-control">
      <button
        onClick={() => setRandomSelected(anecdotes)}
        id="random-anecdote-button"
      >
        Next anecdote
      </button>
      <button
        onClick={() => voteFor(selected)}
        id="vote-button"
      >
        Vote!
      </button>
    </div>
  )
}

export default AnecdoteControl;