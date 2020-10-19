import { cleanup } from '@testing-library/react';
import React, { useState, useEffect } from 'react';


function StartPage() {

    const [random, setRandom] = useState();

    useEffect(() => {
        const userName = localStorage.getItem('userName');

        if (userName) {
            alert("Hello, MR" + userName);
        }


    }, [random])

    return (
        <main>
            startpage
        </main>

    )
}

export default StartPage
