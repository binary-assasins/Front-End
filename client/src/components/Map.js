import React, {useState, useEffect} from "react"; 
import axiosWithAuth from "./auth.js"
import { Graph } from "react-d3-graph"

// This compoenent get's the room data from the backend and displays the rooms
function Map(props) {
    const [room, setRoom] = useState([])

    useEffect(() => {
        axiosWithAuth()
       .get("http://lambda-mud-test.herokuapp.com/api/adv/rooms/", room)
        .then(res => {
        //    console.log(res.data) // seeing if we are getting data
           setRoom(res.data) // set state to data comeing through api call 
        })
        .catch(error => {
            console.log("Getting catch from .get() request", console.error)
        })
    },[])


// map through rooms 
let place = room.rooms
if(place) {
    place = Object.keys(room.rooms)
    // console.log(place)
    // console.log(place.length)
    let newRoom = place.map(room => {
        return {id: room}
       })
       place = newRoom
       console.log("I'm here")
} else {
    console.log("no good :(")
}


// create nodes (nodes are the room them self)
// create links (point to the diffrent rooms)
const data = {
    nodes: place,
    links: [{ source: "1", target: "2" }, { source: "3", target: "4" }, { source: "5", target: "6" }, { source: "7", target: "8" }, { source: "9", target: "10" }, { source: "11", target: "12" }],
};

// const myConfig = {
//     nodeHighlightBehavior: true,
//     node: {
//         color: "lightgreen",
//         size: 120,
//         highlightStrokeColor: "blue",
//     },
//     link: {
//         highlightColor: "lightblue",
//     },
// };


// Styling
const myConfig = {
    "automaticRearrangeAfterDropNode": false,
    "collapsible": false,
    "directed": false,
    "focusAnimationDuration": 0.75,
    "focusZoom": 1,
    "height": 500,
    "highlightDegree": 1,
    "highlightOpacity": 1,
    "linkHighlightBehavior": false,
    "maxZoom": 8,
    "minZoom": 0.1,
    "nodeHighlightBehavior": false,
    "panAndZoom": false,
    "staticGraph": false,
    "staticGraphWithDragAndDrop": false,
    "width": 800,
    "d3": {
      "alphaTarget": 0.05,
      "gravity": -100,
      "linkLength": 100,
      "linkStrength": 1
    },
    "node": {
      "color": "#d3d3d3",
      "fontColor": "black",
      "fontSize": 8,
      "fontWeight": "normal",
      "highlightColor": "SAME",
      "highlightFontSize": 8,
      "highlightFontWeight": "normal",
      "highlightStrokeColor": "SAME",
      "highlightStrokeWidth": "SAME",
      "labelProperty": "id",
      "mouseCursor": "pointer",
      "opacity": 1,
      "renderLabel": true,
      "size": 200,
      "strokeColor": "none",
      "strokeWidth": 1.5,
      "svg": "",
      "symbolType": "circle"
    },
    "link": {
      "color": "#d3d3d3",
      "fontColor": "black",
      "fontSize": 8,
      "fontWeight": "normal",
      "highlightColor": "#d3d3d3",
      "highlightFontSize": 8,
      "highlightFontWeight": "normal",
      "labelProperty": "label",
      "mouseCursor": "pointer",
      "opacity": 1,
      "renderLabel": false,
      "semanticStrokeWidth": false,
      "strokeWidth": 1.5,
      "markerHeight": 6,
      "markerWidth": 6
    }
}

if(place) {
    return(
        <>
        <Graph 
        id="graph-id"
        data={data}
        config={myConfig}
        />
        </>
    )
} else {
    return <p> Loading... </p> 
}

}

export default Map

// "https://binary-assassins.herokuapp.com/api/adv/rooms/