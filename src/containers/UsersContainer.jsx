import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import GameContainer from './GameContainer';
import Instructions from '../components/Instructions';
import { getCurrentUser } from '../actions/getCurrentUser'
import HighScores from '../components/HighScores'
import { Link, Route, Switch } from 'react-router-dom'

const UsersContainer = () => {
  const currentUser = useSelector(state => state.currentUser)
  const dispatch = useDispatch()
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  const [board, setBoard] = useState(dimensions.width < 610 ? dimensions.width : 610)

  useEffect(() => {
    dispatch(getCurrentUser())
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    dispatch(() => {
      setBoard(dimensions.width < 610 ? dimensions.width : 610)
    })

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [dispatch, dimensions, board])

  return (
    <div className='users-container'>
      <div className='users-container-links'>
        <Link to='/game'>Play Game</Link>
        <Link to='/highscores'>High Scores</Link>
      </div>
      <Switch>
        <Route exact path='/game'>
          <Instructions />
          <GameContainer boardSize={board} currentUser={currentUser} />
        </Route>
        <Route exact path='/highscores'>
          <HighScores currentUser={currentUser} />
        </Route>
      </Switch>
    </div>
  )
}

export default UsersContainer