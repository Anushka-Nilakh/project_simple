import { Link, Route } from "react-router-dom"
import React from "react"
import { useState } from 'react'
import About from "./about.jsx"


function Page(){
    const [name, setName] = useState("Anushka");
    const [age, setAge] = useState(20);
    

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response=await fetch("http://localhost:5000/Users",{
            method:"POST",
             headers: {
            "Content-Type": "application/json"
        },
            body:JSON.stringify({
                name:name,
                age:age
            })
        });
        const data=await response.json();
        console.log(data);

    }
    return(
        <div>
            <h1>This is a simple page</h1>
            <h2>My name is {name}</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>

            </nav>
            
            <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder="Enter your name"
            />
            <input
               type="number"
               value={age}
               onChange={(e)=>setAge(e.target.value)}
               placeholder="Enter your age"
            />
            <button type='submit'>Submit</button>
            </form>
            

            
        </div>
    )
}

export default Page