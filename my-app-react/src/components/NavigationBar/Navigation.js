import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// import CSS for navigation
import './navigation.css';

import { FaSearch } from 'react-icons/fa';
import { FiLogIn } from "react-icons/fi";

const Navigation = () => {
    const history = useHistory()
    return (
        <nav>
            <ul>
                <li onClick={() => history.push("/login")}><FiLogIn /></li>
                <li onClick={() => history.push("/team")}>Teams</li>
                <li onClick={() => history.push("/player")}>Player</li>

                <li onClick={() => history.push("/")}>Home</li>
                <li onClick={() => history.push("/search")}><FaSearch /></li>
            </ul>
        </nav>
    )
}

export default Navigation