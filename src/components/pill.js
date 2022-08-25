import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import React from "react";
import './pill.css';

function Pill(props) {

    const colors = [
        {
            'color':'hsl(7, 42%, 75%)',
            'textcolor':'hsl(7, 42%, 25%)'
        },
        {
            'color':'hsl(120, 21%, 84%)',
            'textcolor':'hsl(123, 10%, 34%)'
        },
        {
            'color':'hsl(216, 38%, 32%)',
            'textcolor':'hsl(215, 41%, 92%)'
        },
        {
            'color':'hsl(352, 79%, 24%)',
            'textcolor':'hsl(24, 69%, 92%)'
        }
    ]

    return (
        <div 
            className="pill" 
            style={
                {
                    backgroundColor: colors[props.color%colors.length].color,
                    color: colors[props.color%colors.length].textcolor
                }
            }>{props.content}</div>
    )
}

export default Pill;