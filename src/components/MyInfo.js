import React from "react";
import {ContactCard} from "./ContactCard";

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

            <ContactCard
                name="Mr. Whiskerson"
                imgURL="http://placekitten.com/300/200"
                phone="718-234-5678"
                email="mr.whiskaz@catnap.meow"
            />
            <ContactCard
                name="Fluffykins"
                imgURL="http://placekitten.com/400/200"
                phone="917-257-5238"
                email="fluff@me.com"
            />
            <ContactCard
                name="Destroyer"
                imgURL="http://placekitten.com/400/300"
                phone="212-434-7688"
                email="mr.whiskaz@catnap.meow"
            />
            <ContactCard
                name="Daisy"
                imgURL="http://placekitten.com/300/200"
                phone="212-244-9672"
                email="daisythecat@gmail.com"
            />
        </>
    )
}