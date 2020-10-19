import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// import CSS for navigation
import './navigation.css';

import { FaSearch } from 'react-icons/fa';
import { FiLogIn } from "react-icons/fi";

const Navigation = () => {
    const history = useHistory()

    const login = () => {
        const userName = localStorage.getItem('userName');

        if (userName) {
            return `Hello, ${userName} Log out`
        } else {
            return <FiLogIn />
        }


    }



    return (
        <nav>
            <ul>
                <li onClick={() => history.push("/login")}>{login()}</li>
                <li onClick={() => history.push("/team")}>Teams</li>
                <li onClick={() => history.push("/player")}>Player</li>

                <li onClick={() => history.push("/")}>Home</li>
                <li onClick={() => history.push("/search")}><FaSearch /></li>
            </ul>
        </nav>
    )
}

export default Navigation