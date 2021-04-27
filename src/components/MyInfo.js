import React from "react";

export function MyInfo() {
    const firstName = "Cindy";
    const lastName = "Chen";

    const styles = {
        color: "indigo",
        backgroundColor: "pink",
        fontSize: 30
    }

    return (
        <>
            <h1>Hello, my name is {firstName + ' ' + lastName}</h1>
            <h1 style={{color: "darkgreen", backgroundColor: "lavender"}}>Hello, {`${firstName} ${lastName}`} This does the same thing</h1>


            <p style={styles}>This is a paragraph about me...</p>
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