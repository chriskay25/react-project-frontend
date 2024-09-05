import React from 'react'
import { Route, Switch } from "react-router-dom"
import Instructions from './Instructions'
import GameContainer from '../containers/GameContainer'
import HighScores from './HighScores'

const Routes = ({ board, currentUser }) => {
    return (
        <Switch>
            <Route exact path='/home/instructions'>
                <Instructions />
            </Route>
            <Route exact path='/home/game'>
                <GameContainer boardSize={board} currentUser={currentUser} />
            </Route>
            <Route exact path='/home/highscores'>
                <HighScores currentUser={currentUser} />
            </Route>
        </Switch>
    )
}

export default Routes