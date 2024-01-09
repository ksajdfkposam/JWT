import React from 'react';
import './App.css'
import { Link } from 'react-router-dom';
function Home(props) {
    return (
        <div className='App'>
            <Link to="/login">Login</Link>
        </div>
    );
}

export default Home;