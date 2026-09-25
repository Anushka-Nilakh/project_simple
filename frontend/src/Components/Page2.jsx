import { Link, Route } from "react-router-dom"
import React from "react"
import { useState } from 'react'

function Page(){
    const [name, setName] = useState("Anushka");
    function changeName(){
        setName("Anushka Nilakh");
    }
    return(
        <div>
            <h1>This is a simple page</h1>
            <h2>My name is {name}</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>

            </nav>
            <button onClick={changeName}>Change Name</button>

            
        </div>
    )
}

export default Page