import React from "react";

function formatReadTime(minutes){
    if(minutes<30){
        const coffeeCups=Math.ceil(minutes/5)
        return "☕️".repeat(coffeeCups) + ` ${minutes} min read`
    } else{
        const bentoBoxes=Math.ceil(minutes/10)
        return "🍱".repeat(bentoBoxes) + ` ${minutes} min read`
    }
}

function Article({title, date, preview, minutesToRead}){
    return(
        <article>
            <h3>{title}</h3>
            <small>{date|| "January 1, 1970"}</small>
            <p>{preview}</p>
            <p>{formatReadTime(minutesToRead)}</p>
        </article>
    )
}

export default Article