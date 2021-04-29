import React from "react";

export function Joke(props) {
// console.log("props", props)
    return (
        <>
            <div>
                <h3 style={{display: props.question ? "block" : "none" }}>Question: {props.question}</h3>

                <h3 style={{color: "darkolivegreen"}}>Answer: {props.punchLine}</h3>
            </div>
        </>
    )
}