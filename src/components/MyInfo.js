import React from "react";

export function MyInfo() {
    const firstName = "Cindy";
    const lastName = "Chen";

    return (
        <>
            <h1>Hello, my name is {firstName + ' ' + lastName}</h1>
            <h1>Hello, {`${firstName} ${lastName}`} This does the same thing</h1>
            <p>This is a paragraph about me...</p>
            <ul>
                <li>
                    New Zealand
                </li>
                <li>
                    South Africa
                </li>
                <li>
                    Japan
                </li>
            </ul>
            <input type="checkbox"/>
            <p>Placeholder text</p>

            <input type="checkbox"/>
            <p>Placeholder text</p>

            <input type="checkbox"/>
            <p>Placeholder text</p>
        </>
    )
}