import React from "react"
import {connect} from "react-redux"

import InventoryScreen from "./Inventory/Inventory";
import PlayArea from "./PlayArea";

const Screen = (props) => {

    let returnStuff = []
    if(props.inventory){
        returnStuff = [...returnStuff, <InventoryScreen></InventoryScreen>]

    }
    if(props.playArea) {
        returnStuff = [...returnStuff,<PlayArea></PlayArea>]}
    
    return returnStuff  
}

const mapStateToProps = (state) => {
    return {
        inventory: state.screenReducer.inventory,
        playArea: state.screenReducer.playArea,
        
        
    }

}



export default connect (mapStateToProps)(Screen) 