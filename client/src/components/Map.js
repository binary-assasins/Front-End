import React, {useState, useEffect} from "react"; 
import axiosWithAuth from "./auth.js"
import { Graph } from "react-d3-graph"

// This compoenent get's the room data from the backend and displays the rooms
function Map() {
    const [room, setRoom] = useState([])

    useEffect(() => {
        axiosWithAuth()
       .get("http://lambda-mud-test.herokuapp.com/api/adv/rooms/", room)
        .then(res => {
           console.log(res.data) // seeing if we are getting data
           setRoom(res.data) // set state to data comeing through api call 
        })
        .catch(error => {
            console.log("Getting catch from .get() request", console.error)
        },[])
    },[])

// create nodes (nodes are the room them self)
// create links (point to the diffrent rooms)


// let newNodes = []
// const displaysData = {
//     node: newNodes.room,
//     link: room.link
// }

// const myConfig = {
//     nodeHighlightBehavior: true, 
//     node: {
//         color: "green",
//         size: 120,
//         highlightStrokeColor: "blue",
//     },
//     link: {
//         highlightColor: "lightblue",
//     }
// }

    return(
        <>
        {/* Graph library wrap and define */}
        {/* <Graph 
        id = "graph-id"
        displaysData={displaysData}
        myConfig={myConfig}
        /> */}
        </>
    )
}

export default Map

// "https://binary-assassins.herokuapp.com/api/adv/rooms/