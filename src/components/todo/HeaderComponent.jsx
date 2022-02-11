import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'
import { Link, useNavigate } from 'react-router-dom'


class HeaderComponent extends Component {
    render() {

        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()

        return (
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>

                    <div><a href='http://google.com' className='navbar-brand'>link</a></div>
                    <ul className='navbar-nav'>
                        {isUserLoggedIn && <li><Link className='nav-link' to="/welcome/kaicheng">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className='nav-link' to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className='navbar-nav navbar-collapse justify-content-end'>
                        {!isUserLoggedIn && <li><Link className='nav-link' to="/Login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className='nav-link' to="/Logout" onClick={AuthenticationService.logout}>Logout </Link></li>}
                    </ul>

                </nav>
            </header>
        )
    }
}

export const withRouter = (Component) => {
    const Wrapper = (props) => {
        const history = useNavigate();

        return (
            <Component
                history={history}
                {...props}
            />
        );
    };

    return Wrapper;
};



export default withRouter(HeaderComponent)
