import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeButton() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    
    return (
        <div>
            <button onClick={toggleTheme}>Vaihda Teema (Nytten: {theme})</button>
        </div>
    );
}

export default ThemeButton