import React from "react";

export function Product(props) {
    console.log('what is the prop', props)
    return (
        <>
            <h2>{props.product.name}</h2>
            <p>{props.product.price.toLocaleString("en-US", {style: "currency", currency: "USD"})} - {props.product.description}</p>
        </>
    )
}