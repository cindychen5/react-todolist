import React from "react"
import {Footer} from "./components/Footer";
import {Header} from "./components/Header";
import {MyInfo} from "./components/MyInfo";

export function Home() {
    return (
        <>
        <Header/>
        <MyInfo/>
        <Footer/>
        </>
    )
}