import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, Switch, Route } from 'react-router-dom'
import Instructions from './Instructions'
import GameContainer from '../containers/GameContainer'
import HighScores from './HighScores'
import Logout from './Logout'
import { userLogout } from '../actions/userLogout'

const Home = ({ currentUser }) => {
    const [clicked, setClicked] = useState(false)
    const dispatch = useDispatch()
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    const [board, setBoard] = useState(dimensions.width < 610 ? dimensions.width : 610)
    
    useEffect(() => {
        // Use window size to set state for board size
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


    const handleLogout = () => {
        dispatch(userLogout)
    }

    return (
        <div className='home'>
            {/* <div className={clicked ? 'hidden' : 'users-container-links'} onClick={() => setClicked(!clicked)}> */}
            <div className='home-links' onClick={() => setClicked(!clicked)}>
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

            <Logout handleLogout={handleLogout} />
        </div>
    )
}

export default Home