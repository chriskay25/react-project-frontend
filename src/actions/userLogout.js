export const userLogout = () => {
  return (dispatch) => {
    dispatch({
      type: 'USER_LOGOUT',
      payload: null 
    })
  }
}