import React from 'react'
import { useContext } from 'react';
import { Context } from './context';

const Header = () => {
    const { darkmode, setDarkmode, handleDarkmode } = useContext(Context);

    return (
        <header className={
            darkmode ? 'darkmode' : ''
        }>
            <h1>header</h1>
            <button onClick={handleDarkmode}>dark mode</button>
        </header>
    )
}

export default Header