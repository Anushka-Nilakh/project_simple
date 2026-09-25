import { Link, Route } from "react-router-dom"
import React from "react"
import { useState } from 'react'
import About from "./about.jsx"

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
            <form>
            <input 
                type="text"
                value={name}
                placeholder="Enter your name"
            />
            <input
               type="number"
               value={age}
               placeholder="Enter your age"
            />
            </form>
            

            
        </div>
    )
}

export default Page