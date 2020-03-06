import React, {useEffect, useState} from "react"
import axiosWithAuth from "./auth"

function Player() {

    const [player, setPlayer] = useState([])

    // inst api call
useEffect(() => {
    axiosWithAuth()
    .get("https://binary-assassins.herokuapp.com/api/adv/init", player)
    .then(res => {
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
        <>
        <div>
            <button onClick={ () => {moving('n')}}> S </button> 
            <button onClick={ () => {moving('s')}}> N </button>
            <button onClick={ () => {moving('e')}}> E </button>
            <button onClick={ () => {moving('w')}}> W </button>
           
        </div>
            <div>
                <p>Room Number: {player.title}</p>
                <p>Room Description: {player.biome}</p>
            </div>
        </>
    )
}
export default Player