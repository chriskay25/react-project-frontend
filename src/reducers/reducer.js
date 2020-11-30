export default function reducer(state = {currentUser: null}, action) {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        currentUser: action.payload
      }
    case 'USER_LOGIN':
      return {
        ...state,
        currentUser: action.payload.user
      }
    case 'USER_LOGOUT':
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state
  }
}