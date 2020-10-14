import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Navigation = () => {
    const history = useHistory()
    return (
        <nav>
            <ul>
                <li onClick={() => history.push("/login")}>Long in</li>
                <li onClick={() => history.push("/team")}>Teams</li>
                <li onClick={() => history.push("/player")}>Player</li>
                <li onClick={() => history.push("/search")}>Search</li> 
                <li onClick={() => history.push("/")}>Home</li>      
           </ul>
        </nav>
    )
}

export default Navigation