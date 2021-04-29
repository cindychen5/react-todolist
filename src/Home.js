import React from "react"
import {Footer} from "./components/Footer";
import {Header} from "./components/Header";
import {MyInfo} from "./components/MyInfo";
import jokesData from "./jokesData";
import {Joke} from "./components/Joke";
import productsData from "./productsData";
import {Product} from "./components/Product";

export function Home() {
const jokeComponent = jokesData.map(
    joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine}/>
)
    const productComponent = productsData.map(product => <Product key={product.id} product={product}/>)

    return (
        <>
        <Header/>
        <MyInfo/>
        {jokeComponent}
            {productComponent}
        <Footer/>
        </>
    )
}