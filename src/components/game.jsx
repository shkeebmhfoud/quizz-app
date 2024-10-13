import React from 'react'
import '../App.css'
import components from './componentGameGenerator'
class Game extends React.Component{
    render(){
        return (
            <div className="game-container center-elements">
                {components[0]}
                {components[1]}
                {components[2]}
                {components[3]}
                {components[4]}
                {components[5]}
                {components[6]}
                {components[7]}
                {components[8]}
                {components[9]}
                {components[10]}
                {components[11]}
                {components[12]}
                {components[13]}
                {components[14]}
                {components[15]}
                {components[16]}
                {components[17]}
                {components[18]}
                {components[19]}
                {components[20]}
                {components[21]}
                {components[22]}
                {components[23]}
            </div>
        )
    }
    componentDidMount(){
        document.getElementsByClassName('game-container')[0].style.animation='animate 2s linear forwards'
    }

}
export default Game;