import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user'

function Login() {
    const dispact = useDispatch()

    return (
        <div>
            <button onClick={() => {
                dispact(login({ name: "Sendy", age: 20, email: "cungcailin@gmail.com" }))
                }}>
                Login
            </button>

            <button onClick={() =>{
                dispact(logout())
            }}>
                Logout
            </button>
        </div>
    )
}

export default Login