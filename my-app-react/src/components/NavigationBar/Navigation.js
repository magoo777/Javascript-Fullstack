import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { UserContext } from '../../shared/context/UserContext'

// import CSS for navigation
import './navigation.css';

import { FaSearch } from 'react-icons/fa';
import { FiLogIn, FiLogOut } from "react-icons/fi";

const Navigation = () => {

    const [loggedInUser, setLoggedinUser] = useContext(UserContext)

    const history = useHistory()


    const login = () => {

        if (loggedInUser) {
            return (
                <>
                    <li>
                        <p className="login_user">Hello. {loggedInUser}</p>
                        <span className="logout_user" onClick={() => logOut()}><FiLogOut className="logout__btn" /> Log out</span>
                    </li>
                </>
            )
        } else {
            return (<>
                <li onClick={() => history.push("/login")} style={{ cursor: "pointer" }}> <FiLogIn /> <span>Log in</span></li>
            </>
            )

        }

    }

    useEffect(() => {
        setLoggedinUser(localStorage.getItem('localUser'))
    })

    const logOut = () => {

        // alert(userName + "Has logged out");
        setLoggedinUser("");
        localStorage.removeItem('localUser');
        localStorage.removeItem('localPass');
        history.push("/");

    }



    return (
        <nav>
            <ul>
                {login()}
                <li onClick={() => history.push("/team")}>Teams</li>
                <li onClick={() => history.push("/player")}>Player</li>

                <li onClick={() => history.push("/")}>Home</li>
                <li><FaSearch /></li>
            </ul>
        </nav>
    )
}

export default Navigation

