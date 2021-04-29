import React from "react"
import {Footer} from "./components/Footer";
import {Header} from "./components/Header";
import {MyInfo} from "./components/MyInfo";
import {Joke} from "./components/Joke";

export function Home() {
    return (
        <>
        <Header/>
        <MyInfo/>
        <Joke
        question="Did you hear about the claustrophobic astronaut?"
        punchLine="He just needed a little space"
        />
        <Footer/>
        </>
    )
}