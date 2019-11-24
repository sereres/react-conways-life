import React from "react";
import './Cell.css'

export default function Cell(props) {
    return <div
        className={`alive-` + props.alive + ` grid-item`}
        onClick={props.onClick}
    />
}