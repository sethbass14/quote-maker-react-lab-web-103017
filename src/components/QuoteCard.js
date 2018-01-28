import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { upvoteQuote, downvoteQuote, removeQuote } from '../actions/quotes'

const QuoteCard = ({ upvoteQuote, downvoteQuote, removeQuote, quote }) => {
  const { content, author, votes, id } = quote
  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            {<p>{content}</p>}
            {<footer>- author <cite title="Source Title">{author}</cite></footer>}
          </blockquote>
        </div>
        <div className="float-right">
          <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => upvoteQuote(id)}
              >
              Upvote
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => downvoteQuote(id)}
              >
              Downvote
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => removeQuote(id)}
              >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          {<div>Votes: {votes}</div>}
        </div>
      </div>
    </div>
  );
}

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({
      upvoteQuote,
      downvoteQuote,
      removeQuote
    }, dispatch)
  }

export default connect(null, mapDispatchToProps)(QuoteCard);
