import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'
import { useNavigate } from 'react-router-dom'


class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: 'kaicheng',
            password: '',
            hasLoginFailed: false,
            showSuccessmessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }


    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className='container' />
                {this.state.hasLoginFailed && <div className='alert alert-warning'>Invalid Credential</div>}
                {this.state.showSuccessmessage && <div>Login Successful</div>}
                User Name: <input type='text' name='username' value={this.state.username} onChange={this.handleChange} />
                Password: <input type='password' name='password' value={this.state.password} onChange={this.handleChange} />
                <button className='btn btn-success' onClick={this.loginClicked}>Login</button>
            </div>
        )
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    loginClicked() {

        // if (this.state.username === 'kaicheng' && this.state.password === 'dummy') {
        //     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
        //     this.props.navigate(`/welcome/${this.state.username}`)
        //     // this.setState({ showSuccessmessage: true })
        //     // this.setState({ hasLoginFailed: false })
        // }
        // else {
        //     this.setState({ showSuccessmessage: false })
        //     this.setState({ hasLoginFailed: true })
        // }


        // AuthenticationService
        //     .executeBasicAuthenticationService(this.state.username, this.state.password)
        //     .then(() => {
        //         AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
        //         this.props.navigate(`/welcome/${this.state.username}`)
        //     }).catch(() => {
        //         this.setState({ showSuccessMessage: false })
        //         this.setState({ hasLoginFailed: true })
        //     })


        AuthenticationService
            .executeJwtAuthenticationService(this.state.username, this.state.password)
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
                this.props.navigate(`/welcome/${this.state.username}`)
            }).catch(() => {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            })


        // AuthenticationService
        //     .executeBasicAuthenticationService(this.state.username, this.state.password)
        //     .then(() => {
        //         AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
        //         this.props.navigate(`/welcome/${this.state.username}`)
        //     }).catch(() => {
        //         this.setState({ showSuccessmessage: false })
        //         this.setState({ hasLoginFailed: true })
        //     })

    }

}


function LoginComponentWithNavigate(props) {
    const navigate = useNavigate();
    return <LoginComponent {...props} navigate={navigate} />
}



export default LoginComponentWithNavigate
