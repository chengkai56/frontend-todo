import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginComponent from './LoginComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import AuthenticationRoute from './AuthenticationRoute'
import TodoComponent from './TodoComponent.jsx'


class TodoApp extends Component {

    render() {

        return (
            <div className='TodoApp'>
                <Router>
                    <HeaderComponent />
                    <Routes>
                        <Route path='/' element={<LoginComponent />} />
                        <Route path='/login' element={<LoginComponent />} />
                        <Route path='/welcome/:name' element={
                            <AuthenticationRoute>
                                <WelcomeComponent />
                            </AuthenticationRoute>} />
                        <Route path='/todos' element={
                            <AuthenticationRoute>
                                <ListTodosComponent />
                            </AuthenticationRoute>} />

                        <Route path='/logout' element={
                            <AuthenticationRoute>
                                <LogoutComponent />
                            </AuthenticationRoute>} />

                        <Route path='/todos/:id' element={
                            <AuthenticationRoute>
                                <TodoComponent />
                            </AuthenticationRoute>} />

                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                    <FooterComponent />
                </Router>

            </div>
        )
    }
}

export default TodoApp
