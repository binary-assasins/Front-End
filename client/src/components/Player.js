import React, {useEffect, useState} from "react"
import axiosWithAuth from "./auth"
import '../css/player.css'

function Player() {

    const [player, setPlayer] = useState([])

    // inst api call
useEffect(() => {
    axiosWithAuth()
    .get("https://binary-assassins.herokuapp.com/api/adv/init", player)
    .then(res => {
        // console.log(res)
        setPlayer(res.data)
    })
    .catch(error => {
        console.log("getting catch from init api call", error)
    })
}, [])
console.log(player)


const moving = (i) => {
    // useEffect(() => {
       axiosWithAuth()
       .post("https://binary-assassins.herokuapp.com/api/adv/move", {direction: i})
       .then(res => {
            setPlayer(res.data)
       })
       .catch(error => {
           console.log("getting catch from move api call", error)
       }) 
    // })
}

// console.log(player)

// call the init end point to initialize where the player is sponds
// create a function that will then call the move endpoint within
// make sure to return Map componenet with props
// then in the return we can do a button with an onclick(n, s, e, w)

    //Remember North is south and South is north...
    return(
        <div className="ControlHub">

            <div className="NavButtons">
                <button onClick={ () => {moving('n')}}> North (n) </button> 
                <button onClick={ () => {moving('s')}}> South (s) </button>
                <button onClick={ () => {moving('e')}}> East (e) </button>
                <button onClick={ () => {moving('w')}}> West (w) </button>
                <p>You can move: {player.room_directions}</p>
            
            </div>

            <div className="PlayerInfo">
                <div>
                    <p>{player.name}</p>
                    <p>Current inventory: {player.inventory}</p>
                </div>
                <div>
                    <p>You are in Room Number: {player.title}</p>
                    <p>Room {player.title}'s biome is the *{player.biome}* biome!</p>
                    <p>Players in room {player.title}: {player.players}</p>
                </div>
                <p>{player.error_msg}</p> 
            </div>

        </div>
    )
}
export default Player