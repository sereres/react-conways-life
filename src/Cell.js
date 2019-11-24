import React from "react";
import './Cell.css'

export default function Cell(props) {
    return <div className={`grid-item alive-`+props.alive}/>
}