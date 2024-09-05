export const getHighScore = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${id}`)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          alert(data.error)
        } else {
          dispatch({type: 'GET_HIGH_SCORE', payload: data.highScore})
        }
      })
  }
}