import React from "react";

export function Joke(props) {
    return (
        <>
            <div>
                <h3>Question:</h3>
                <p>{props.question}</p>
                <h3>Answer:</h3>
                <p>{props.punchLine}</p>
            </div>
        </>
    )
}