import React, {useEffect, useState} from "react"
import axiosWithAuth from "./auth"
import { set } from "d3"

function Player() {

    const [player, setPlayer] = useState([])

    // inst api call
useEffect(() => {
    axiosWithAuth()
    .get("", player)
    .then(res => {
        setPlayer(res.data)
    })
    .catch(error => {
        console.log("getting catch from init api call", error)
    }, [])
})
console.log(player)

const moveing = (i) => {
    
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
console.log(player)

// call the init end point to initialize where the player is sponds
// create a function that will then call the move endpoint within
// make sure to return Map componenet with props
// then in the return we can do a button with an onclick(n, s, e, w)

    return(
        <>
        <button onClick={moveing("n")}> N </button>
        <button onClick={moveing("s")}> S </button>
        <button onClick={moveing("e")}> E </button>
        <button onClick={moveing("w")}> W </button>
        </>
    )
}
export default Player