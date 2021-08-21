export const userLogin = (data, history) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/login', {
      headers: {
        "Content-Type": "application/json"
      },
      method: 'POST',
      body: JSON.stringify({
        user: data
      })
    })
      .then(resp => resp.json())
      .then(userData => {
        if (userData.error) {
          alert("Invalid Credentials")
        } else {
          localStorage.setItem('token', userData.jwt)
          history.push('/home')
          dispatch({
            type: 'USER_LOGIN',
            payload: userData.user
          })
        }
      })
  }
}