import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'
import { Navigate } from 'react-router-dom'


class AuthenticationRoute extends Component {

    render() {

        // const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        // return isUserLoggedIn ? { ...this.props.children } : <Navigate to="/login" />

        if (AuthenticationService.isUserLoggedIn())
            return { ...this.props.children }
        else
            return <Navigate to="/login" />
        // if (AuthenticationService.isUserLoggedIn()) {

        //     return <Route {...this.props} />
        // }
        // else {
        //     return <Redirect to='/login' />
        // }

    }
}

export default AuthenticationRoute
