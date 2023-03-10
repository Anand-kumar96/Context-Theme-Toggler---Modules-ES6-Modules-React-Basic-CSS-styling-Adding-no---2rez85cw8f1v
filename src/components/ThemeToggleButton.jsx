import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemeToggleButton = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleButtonClick = () => {
        if (theme === "light") {
            setTheme("dark");
            return;
        }
        setTheme("light");
    };

    return (
        <button
            id="global-theme-toggler"
            onClick={handleButtonClick}
            className={`btn ${theme === "light" ? "btn-light" : "btn-dark"}`}
        >
            Switch to {theme === "light" ? "dark" : "light"} theme
        </button>
    );
};
export { ThemeToggleButton };
