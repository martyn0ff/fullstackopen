function Anecdote({ anecdotes, votes, selected }) {
  return (
    <>
      <div
        id="current-anecdote"
        style={{
          height: 50,
          maxHeight: 50
        }}
      >
        {anecdotes[selected]}
      </div>
      <div
        id="votes"
      >
        <strong>Votes:</strong> {votes[selected] || 0}
      </div>
    </>
  )
}

export default Anecdote;