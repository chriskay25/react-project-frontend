export const userLogin = (data) => {
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
      .then(user => {
        if (user.error) {
          alert("Invalid Credentials")
        } else {
          dispatch({
            type: 'USER_LOGIN',
            payload: user
          })
        }
      })
  }
}