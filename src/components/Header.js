import React from "react";


export function Header() {
    const date = new Date(2022, 4, 27, 12, 30, 15);
    //year, month, date, hour, min, sec
    const hours = date.getHours()
    console.log(date)
    // console.log(hours)
    let timeOfDay

    const styles = {
        fontSize: 30
    }

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "green"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        styles.color= "yellow"
    } else {
        timeOfDay = "night"
        styles.color = "#D90000"
    }

    return (
        <>
            <header className="navbar" style={styles}>Good {timeOfDay}</header>

        </>
    )
}