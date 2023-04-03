import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const LngContext = createContext();

export const LngProvider = ({ children }) => {
    const [language, setLanguage] = useState('PT');
    function selectLanguage(event) {
        setLanguage(event.target.value);
    }

    return (
        <LngContext.Provider value={{ language, selectLanguage }}>{children}</LngContext.Provider>
    );
};
