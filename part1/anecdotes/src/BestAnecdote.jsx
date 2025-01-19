import { useEffect, useState } from "react";

function BestAnecdote({ anecdotes, votes }) {
  const [best, setBest] = useState(null);
  const [maxVotes, setMaxVotes] = useState(0);

  useEffect(
    () => determineBestAnecdoteInfo(anecdotes, votes),
    [votes]
  );

  const mostVotedAnecdote = anecdotes[best];

  let bestAnecdoteContent;

  if (Object.keys(votes).length === 0) {
    bestAnecdoteContent = <p><strong>Vote for the best anecdote and watch it appear here! :)</strong></p>;
  }
  else {
    bestAnecdoteContent = <>
      <p><strong>Best anecdote! ({maxVotes} vote(s))</strong></p>
      {mostVotedAnecdote}
    </>;
  }

  function determineBestAnecdoteInfo(anecdotes, votes) {
    let mostVotedIdx = anecdotes.length > 0 ? 0 : null;
    let maxVotes = 0;
    for (const [idx, _votes] of Object.entries(votes)) {
      if (maxVotes && _votes === maxVotes && idx !== mostVotedIdx) {
        // There is a tie, and follow-up
        // anecdote is considered behind
      }
      else if (_votes > maxVotes) {
        maxVotes = _votes;
        mostVotedIdx = idx;
      }
    }
    setBest(mostVotedIdx);
    setMaxVotes(maxVotes);
  }

  return (
    <div id="best-anecdote">
      {bestAnecdoteContent}
    </div>
  );
}

export default BestAnecdote;