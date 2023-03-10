import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import '../styles/App.css';

const LocalThemedBox = () => {
    const [localTheme, setLocalTheme] = useState('light');
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        setLocalTheme(theme);
    }, [theme]);

    const handleClick = () => {
        if (localTheme === 'light') {
            setLocalTheme('dark');
            return;
        }
        setLocalTheme('light');
    }


    return (
        <div
            style={
                {
                    width: '200px',
                    height: '200px',
                    border: '2px solid green'
                }
            }
            id="local-themed-box"
            className={localTheme === 'light' ? 'bg-light' : 'bg-dark'}
        >
            <p
                id='local-themed-text-container'
                className={localTheme === 'light' ? 'txt-light' : 'txt-dark'}
            >
                Some Text
            </p>
            <button
                onClick={handleClick}
                id='local-theme-toggler'
                className={`btn ${localTheme === 'light' ? 'btn-light' : 'btn-dark'}`}
            >
                Toggle local theme to {localTheme === 'light' ? 'dark' : 'light'}
            </button>
        </div>
    )
}

export { LocalThemedBox }