export default function reducer(state = {currentUser: null, highScore: null, highScores: []}, action) {
  switch (action.type) {
    case 'GET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      }
    case 'ADD_USER':
      return {
        ...state,
        currentUser: action.payload
      }
    case 'USER_LOGIN':
      return {
        ...state,
        currentUser: action.payload
      }
    case 'USER_LOGOUT':
      return {
        ...state,
        currentUser: action.payload
      }
    case 'SAVE_GAME':
      return {
        ...state,
        highScore: action.payload.user.highScore
      }
    case 'GET_HIGH_SCORE':
      return {
        ...state,
        highScore: action.payload
      }
    case 'GET_HIGH_SCORES':
      return {
        ...state,
        highScores: [...action.payload]
      }
    default:
      return state
  }
}