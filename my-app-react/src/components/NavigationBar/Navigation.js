import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Navigation = () => {
    const history = useHistory()
    return (
        <nav>
            <ul>
                <li onClick={() => history.push("/")}>Home</li>
                <li onClick={() => history.push("/player")}>Log in</li>      
           </ul>
        </nav>
    )
}

export default Navigation