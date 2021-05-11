import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getHighScores } from '../actions/getHighScores'
import HighScore from './HighScore'

const HighScores = ({ currentUser }) => {
  const dispatch = useDispatch()
  const games = useSelector(state => state.highScores)

  useEffect(() => {
    dispatch(getHighScores())
  }, [dispatch])

  const showHighScores = () => {
    return games.map((game) => {
      return <HighScore key={game.id} game={game} />
    })
  }

  const showUsersHighScores = () => {
    return currentUser.highScores.map((game) => {
      return <HighScore key={game.score.id} usersScore={game} />
    })
  }

  return (
    <div className='highscores-container' style={{maxWidth: '450px', padding: '2rem'}}>
      <h1 style={{textAlign: 'center', fontSize: '4rem'}}>HIGH SCORES</h1>
      <div className="highscores">
        <div className='users-highscores'>
          <h2>All Time</h2>
          {showHighScores()}
        </div>
        <div className='all-time-highscores'>
          <h2>{currentUser.username + "'s"}</h2>
          {showUsersHighScores()}
        </div>
      </div>
    </div>
  ) 
  
}

export default HighScores