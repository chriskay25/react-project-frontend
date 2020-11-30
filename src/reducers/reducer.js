export default function reducer(state = {currentUser: null}, action) {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state
  }
}