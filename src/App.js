import React from 'react'
import Game from './components/game'
import EndPage from './components/EndPage'
import './App.css'
class App extends React.Component{
    render(){
        return (
            <div className='app center-elements'>
                <Game />
                <EndPage />
            </div>
        )
    }
}
export default App