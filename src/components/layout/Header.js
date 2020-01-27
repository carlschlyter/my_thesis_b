import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>The Guessing App</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/Register">Register</Link> | <Link style={linkStyle} to="/Login">Login</Link>  | <Link style={linkStyle} to="/Guessing">Guessing</Link> | <Link style={linkStyle} to="GuessResults">Guess Results</Link> | <Link style={linkStyle} to="Toplist">Toplist</Link>
        </header>
    )
}

const headerStyle = {
    background: 'darkBlue',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: 'white'
}
