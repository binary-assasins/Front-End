import React, {useState, useEffect} from "react"; 
import axiosWithAuth from "./auth.js"
import { Graph } from "react-d3-graph"
import MapThrough from "./MapThrough.js";

// This compoenent get's the room data from the backend and displays the rooms
function Map() {
    const [room, setRoom] = useState([])

    useEffect(() => {
        axiosWithAuth()
       .get("https://binary-assassins.herokuapp.com/api/adv/rooms", room)
        .then(res => {
           console.log("logging res.data", res.data) // seeing if we are getting data
           setRoom(res.data) // set state to data comeing through api call 
        })
        .catch(error => {
            console.log("Getting catch from .get() request", error)
        })
    }, [])


// map through rooms 
// let place = room.title
// if(place) {
//     place = Object.keys(room.title)
//     let newRoom = place.map(room => {
//         return {id: room}
//        })
//        place = newRoom
//        console.log("I'm here")
// } else {
//     console.log("no good :(")
// }

    // let place = MapThrough()
    // if(room.length > 0) {
    //     let newRoom = room.map(item => {
    //         return room
    //         // return <MapThrough key={item.id} title={item.title} x={item.x} y={item.y} description={item.description} />
    //     })
    //     place = newRoom
    // }
      

// const data = {
//     nodes: place,
//     links: [{ source: "1", target: "2" }, { source: "3", target: "4" }, { source: "5", target: "6" }, { source: "7", target: "8" }],
// };


// const data = {
//     nodes: place,
//     links: [{ source: "1", target: "2" }, { source: "3", target: "4" }, { source: "5", target: "6" }, { source: "7", target: "8" }],
// };

let text = JSON.parse(room)
console.log(text)


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
console.log("This is room from Map",room)
if(room.length === 0) {
    return(
        <>
        <p> Loading... </p> 
        </>
    )
} else {
    return(
        <>
        <p> Something from Map </p>
        {/* <Graph 
        id="graph-id"
        data={data}
        config={myConfig}
        />  */}
        {room.map(item => {
            // return room
            return <MapThrough key={item.id} title={item.title} x={item.x} y={item.y} description={item.description} />
        })}

        {/* <MapThrough room={place} /> */}
        </>
    )
}

}

export default Map