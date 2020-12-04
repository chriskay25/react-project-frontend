export const getHighScores = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/high_scores')
      .then(resp => resp.json())
      .then(games => {
        if (games.error) {
          alert(games.error)
        } else {
          dispatch({type: 'GET_HIGH_SCORES', payload: games})
        }
      })
  }
}
