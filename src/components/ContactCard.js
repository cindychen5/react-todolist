import React from "react";

export function ContactCard(props) {
    return (
        <div className="contact-card">
            <img src={props.imgURL}/>
            <h3>{props.name}</h3>
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </div>
    )
}
