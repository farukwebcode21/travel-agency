import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className="container text-center m-5 p-5">
            <h1 className="border border-danger py-3 w-50 m-auto mb-3">Create account</h1>
            <Link to="/login"><button type="submit" className="shadow py-2 w-25 btn-outline-success ">Register</button></Link>
        </div>
    )
}

export default Register
