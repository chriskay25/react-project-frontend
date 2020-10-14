export default function reducer(state = {users: []}, action) {
  switch (action.type) {
    case 'FETCH_USERS':
      return {users: action.payload}
    case 'ADD_USER':
      return {...state, users: [...state.users, action.payload]}
    default:
      return state
  }
}