import { Link, Route } from "react-router-dom"
import React from "react"

function Page(){
    return(
        <div>
            <h1>This is a simple page</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                

            </nav>
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="/about" element={<h1>About Page</h1>} />
            </Routes>
        </div>
    )
}

export default Page