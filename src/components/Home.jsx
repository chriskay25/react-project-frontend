import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import Logout from './Logout'
import { userLogout } from '../actions/userLogout'
import Routes from './Routes'

const Home = ({ currentUser }) => {
    const history = useHistory()
    const [clicked, setClicked] = useState(false)
    const dispatch = useDispatch()
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    const [board, setBoard] = useState(dimensions.width < 700 ? dimensions.width : 700)
    
    useEffect(() => {
        // Use window size to set state for board size
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }
        dispatch(() => {
            setBoard(dimensions.width < 700 ? dimensions.width : 700)
        })
    
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [dispatch, dimensions, board])


    const handleLogout = () => {
        history.push('/')
        dispatch(userLogout)
    }

    return (
        <div className='home'>
            <div className='home-links' onClick={() => setClicked(!clicked)}>
                <Link to='/game'>Play Game</Link>
                <Link to='/highscores'>High Scores</Link>
                <Link to='/instructions'>Instructions</Link> 
            </div>

            <Routes board={board} currentUser={currentUser} />

            <Logout handleLogout={handleLogout} />
        </div>
    )
}

export default Home