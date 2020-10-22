import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

import { UserContext } from '../../shared/context/UserContext'

const LoginView = () => {

    const history = useHistory();
    const [loginEmail, setLoginEmail] = useState();
    const [loginPassword, setLoginPassword] = useState();
    const [loggedInUser, setLoggedinUser] = useContext(UserContext)

    const login = () => {

        // alert(loginEmail + "Has logged in");
        setLoggedinUser(loginEmail)

        localStorage.setItem('userName', loginEmail);
        localStorage.setItem('passWord', loginPassword);
        history.push("/");
    }


    return (
        <main>
            {loggedInUser}
            <p>Log in</p>
            Email:<input onChange={e => setLoginEmail(e.target.value)}></input><br />
            Passw:<input onChange={e => setLoginPassword(e.target.value)}></input><br />
            <button onClick={() => login()}>Log in</button>
        </main>
    )


}

export default LoginView

