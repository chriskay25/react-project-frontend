export const userLogout = () => {
  localStorage.clear()
  return (dispatch) => {
    dispatch({
      type: 'USER_LOGOUT',
      payload: null 
    })
  }
}