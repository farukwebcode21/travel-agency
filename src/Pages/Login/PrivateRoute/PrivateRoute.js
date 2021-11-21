import React from 'react'
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <div className="row">
            <div className="col-lg-12 text-center">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden"></span>
                </div>
             </div>
         </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children :
                <Redirect
                to={{
                    pathname: "/login",
                    state: {from: location}
                }}
            />}
        >

        </Route>
    )
}

export default PrivateRoute
