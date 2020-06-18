import React from "react"
import {connect} from "react-redux"

import {changeView} from "../actions"


const Playarea = (props) => {

    

    

    const areaPositions = props.positions.map((element) => {
        if (element.positionX === 1 && element.positionY === 1) {
            
        return <div className="playarea-a1">{element.name}</div>
        }
        else if (element.positionX === 2 && element.positionY === 1){
        return <div className="playarea-a2">{element.name}</div>
         }
        else if (element.positionX === 3 && element.positionY === 1){
        return <div className="playarea-a3">{element.name}</div>
        }
        else if (element.positionX === 1 && element.positionY === 2){
        return <div className="playarea-b1">{element.name}</div>
        }
        else if (element.positionX === 2 && element.positionY === 2) {
        return <div className="playarea-b2">{element.name}</div>
        }
        else if (element.positionX === 3 && element.positionY === 2){
        return <div className="playarea-b3">{element.name}</div>
        }
        else if (element.positionX === 1 && element.positionY === 3){
        return <div className="playarea-c1">{element.name}</div>
        }
        else if (element.positionX === 2 && element.positionY === 3){
        return <div className="playarea-c2">{element.name}</div>
        }
        else if (element.positionX === 3 && element.positionY === 3){    
        return <div className="playarea-c3">{element.name}</div>
        }
        else return null
    }
        

    )
    const handleClick = () => {
        
        const newView = {
            inventory: true,
            playArea: false,
            
        
        }
        props.changeView(newView)
    }
    
    return (
    <div>   
    <div className="playarea-container">{areaPositions}</div>
    <button  onClick={handleClick}>Inventory</button>
    </div>
    )

}

const mapStateToProps = (state) => {
    return {
        positions: state.playareaReducer
    }
}

export default connect(mapStateToProps, {changeView})(Playarea)

           /*  <div className="playarea-a1">a1</div>
            <div className="playarea-a2">a2</div>
            <div className="playarea-a3">a3</div>
            <div className="playarea-b1">b1</div>
            <div className="playarea-b2">b2</div>
            <div className="playarea-b3">b3</div>
            <div className="playarea-c1">c1</div>
            <div className="playarea-c2">c2</div>
            <div className="playarea-c3">c3</div> */