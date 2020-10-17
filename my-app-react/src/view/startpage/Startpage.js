import { cleanup } from '@testing-library/react';
import React, { useEffect } from 'react';

function Startpage() {

    const [random, setRandom] = useState();

    useEffect(() => {
        const userName = localStorage.getItem('userName');

        if (userName) {
            alert("Hello, MR" + userName);
        }


    }, [])

    return (
        <div>
            startpage
        </div>
    )
}

export default Startpage
