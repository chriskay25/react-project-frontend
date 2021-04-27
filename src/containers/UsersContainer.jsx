import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import GameContainer from './GameContainer';
import Instructions from '../components/Instructions';
import { getCurrentUser } from '../actions/getCurrentUser'

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
    <>
      <Instructions />
      <GameContainer boardSize={board} currentUser={currentUser} />
    </>
  )
}

export default UsersContainer