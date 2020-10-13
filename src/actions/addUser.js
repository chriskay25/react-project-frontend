export const addUser = (data) => {
  console.log("This is the data: ", data)
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
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
        dispatch({type: 'ADD_USER', payload: user})
      }
    })
  }
}