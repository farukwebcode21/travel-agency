import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="container text-center m-5 p-5">
            404<br />
            <p>Not Found</p>
             <Link to="/"><button>Go Back</button></Link>
        </div>
    )
}

export default NotFound
