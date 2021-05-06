import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getHighScores, getUserHighScores } from '../actions/getHighScores'
import HighScore from './HighScore'

const HighScores = () => {
  const dispatch = useDispatch()
  const games = useSelector(state => state.highScores)

  useEffect(() => {
    dispatch(getHighScores())
    dispatch(getUserHighScores())
  }, [dispatch])

  const showHighScores = () => {
    return games.map((game) => {
      console.log('gameHS: ', game)
      return <HighScore key={game.id} game={game} />
    })
  }

  return (
     <div className="high-scores">
       <h1 style={{paddingTop: '1rem'}}>HIGH SCORES</h1>
       {showHighScores()}
     </div>
  ) 
  
}

export default HighScores