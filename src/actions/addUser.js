export const addUser = (data) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(userData => {
      if (userData.error) {
        alert(userData.error)
      } else {
        localStorage.setItem('token', userData.jwt)
        dispatch({type: 'ADD_USER', payload: userData.user})
      }
    })
  }
}