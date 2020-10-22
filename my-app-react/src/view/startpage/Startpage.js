import React, { useContext } from 'react';

import { UserContext } from '../../shared/context/UserContext';

function StartPage() {

    const [loggedInUser, setLoggedinUser] = useContext(UserContext)


    return (
        <main>
            <h1>Welcome to Football United</h1>
            <p>Here you will find update and lates news on team and players....</p>
            <h>Currently logged in user: {loggedInUser}</h>
        </main>

    )
}

export default StartPage
