import React from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth';

import './Login.css';


const Login = () => {

    const { signUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/'


    const handleGoogleLogin = () => {
        signUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
            .catch((error) => {
                console.log(error.message);
        })

    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center p-5">
                    <h3 className="border border-danger mb-5 text-uppercase w-50 m-auto p-3">Login Please</h3>
                    <button className="btn btn-danger w-50 m-auto text-white mb-2" type="button">
                        <span onClick={handleGoogleLogin}> Sign in With Googel</span>
                    </button>
                    <Link to="/register" className="d-grid text-decoration-none">
                         <button className="btn w-50 m-auto text-success" type="button">If You are new please create account ?</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
