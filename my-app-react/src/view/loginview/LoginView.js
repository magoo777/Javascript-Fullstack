import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const LoginView = () => {

    const history = useHistory();
    const [loginEmail, setLoginEmail] = useState();
    const [loginPassword, setLoginPassword] = useState();
    console.log(loginEmail);
    console.log(loginPassword);

    const login = () => {

        alert(loginEmail + "Has logged in");
        history.push("/");
        localStorage.setItem('userName', loginEmail);
    }

    return (
        <main>
            <p>Log in</p>
            Email:<input onChange={e => setLoginEmail(e.target.value)}></input><br />
            Passw:<input onChange={e => setLoginPassword(e.target.value)}></input><br />
            <button onClick={() => login()}>Log in</button>
        </main>
    )


}

export default LoginView

