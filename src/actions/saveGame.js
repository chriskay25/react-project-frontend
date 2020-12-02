export const saveGame = (data) => {
  const token = localStorage.getItem('token')
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/games', {
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(gameData => {
      console.log("gameData: ", gameData)
      if (gameData.error) {
        alert(gameData.error)
      } else {
        dispatch({type: 'SAVE_GAME', payload: gameData})
      }
    })
  }
}