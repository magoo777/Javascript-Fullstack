import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// import CSS for navigation
import './navigation.css';

import { FaSearch } from 'react-icons/fa';
import { FiLogIn } from "react-icons/fi";

const Navigation = () => {
    const history = useHistory()
    const userName = localStorage.getItem('userName');

    const login = () => {

        if (userName) {
            return (
                <>
                    <p>Hello. {userName}</p>
                    <span onClick={() => logOut()}>Log out</span>
                </>
            )
        } else {
            return (<>
                <FiLogIn /> <span>Log in</span>
            </>
            )

        }

    }

    const logOut = () => {

        alert(userName + "Has logged out");
        history.push("/");
        localStorage.removeItem('userName');
    }

    const [random, setRandom] = useState(localStorage.getItem('userName'));

    // useEffect(() => {
    //     if (!userName) {
    //         console.log("Log out")

    //     }

    // }, [random])

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