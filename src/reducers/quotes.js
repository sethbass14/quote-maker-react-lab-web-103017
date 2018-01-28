

export default (state = [], action) => {
  let actionQuote = state.find(quote => quote.id === action.quoteId)
  let index = state.indexOf(actionQuote)
  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);
    case 'UPVOTE_QUOTE':
      actionQuote = {...actionQuote, votes: actionQuote.votes + 1}
      return [...state.slice(0, index), actionQuote, ...state.slice(index + 1)];
    case 'DOWNVOTE_QUOTE':
      if (actionQuote.votes > 0) {
        actionQuote = {...actionQuote, votes: actionQuote.votes - 1}
        return [...state.slice(0, index), actionQuote, ...state.slice(index + 1)];
      } else {
        return state
      }
    default:
    return state;
  }
}
