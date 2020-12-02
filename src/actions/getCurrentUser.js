export const getCurrentUser = () => {
  const token = localStorage.getItem('token')
  if (token) {
    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/get_current_user', {
        headers: {
          'Authorization': token,
        }
      })
        .then(resp => resp.json())
        .then(user => {
          if (user.error) {
            alert(user.error)
          } else {
            dispatch({type: 'GET_CURRENT_USER', payload: user})
          }
        })
    }
  } else {
    return (dispatch) => {
      dispatch({type: 'GET_CURRENT_USER', payload: null})
    }
  }
}