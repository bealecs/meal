import React from "react";
import './App.css';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const Signup = () => {

    
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    
    const enterUsername = (e) => {
        setUsername(e.target.value)
    }
    const enterPassword = (e) => {
        setPassword(e.target.value)
    }
    const enterEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    } 
    return (
    <div className="login-container">
        <h2>Please fill out your information to create an account</h2>
        <h4>Fields marked with an (*) are required</h4>
        <form>
            <div className="input-field">
                <label htmlFor="username">* Username:</label>
                <input onChange={enterUsername} value={username} required type='text' id='username' autoComplete="off" minLength={6} maxLength={25}/>
            </div>
            <div className="input-field"> 
                <label htmlFor="password">* Password:</label>
                <input onChange={enterPassword} value={password} required autoComplete="off" type='password' id="password" minLength={8}/>
            </div>
            <div className="input-field">
                <label htmlFor="email">* Email:</label>
                <input onChange={enterEmail} value={email} required autoComplete="off" type='email' id='email'/>
            </div>
            <div className="input-field">
                <button onSubmit={handleSubmit} type="submit" id='login-submit-button'>Sign Up</button>
            </div>
            <p className="back-to-signin">Already have an account?<Link to="/Login" id='sign-up-button'>Sign in</Link></p>
        </form>
    </div>
    )}

    export const Login = () => {

        const [username, setUsername] = React.useState("");
        const [password, setPassword] = React.useState("");

        const enterUsername = (e) => {
            setUsername(e.target.value)
        }
        const enterPassword = (e) => {
            setPassword(e.target.value)
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            alert("This feature is still under development..");
        } 
        return (
            <div className="signup-container">
                <h2>Please fill out your information to create an account</h2>
                <h4>Fields marked with an (*) are required</h4>
                <form>
                    <div className="input-field">
                        <label htmlFor="username">* Username:</label>
                        <input onChange={enterUsername} value={username} required type='text' id='username' autoComplete="off" minLength={6} maxLength={25}/>
                    </div>
                    <div className="input-field"> 
                        <label htmlFor="password">* Password:</label>
                        <input onChange={enterPassword} value={password} required autoComplete="off" type='password' id="password" minLength={8}/>
                    </div>
                    <div className="input-buttons">
                        <div className="button1">
                            <button onSubmit={handleSubmit} type="submit" id='login-submit-button'>Sign in</button>
                        </div>
                        <div className="button2">
                            <p>Don't have an account yet? <Link to="/Signup" id='sign-up-button'>Sign Up</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        )
    }