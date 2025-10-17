
import { createContext, useEffect, useState, type PropsWithChildren } from "react";

// 1. Define Context Schema
export type ThemeName = "light" | "dark"
export interface ThemeContextProps {
    selectedTheme: ThemeName,

    isLightTheme: boolean,

    nextTheme: () => void
}


// 2. Create a context
// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

// 3. Create a provider that wraps children components
export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
    const [selectedTheme, setSelectedTheme] = useState<ThemeName>("light");



    const nextTheme = () => {
        if (selectedTheme === "light") {
            setSelectedTheme("dark");
            localStorage.setItem('app-theme', 'dark');
        } else {
            setSelectedTheme("light");
            localStorage.setItem('app-theme', 'light');
        }
    }

    // Optional: Load State from localStorage or API
    useEffect(() => {
        const savedTheme = localStorage.getItem('app-theme') as ThemeName;
        if (savedTheme) {
            setSelectedTheme(savedTheme);
        }
    }, []);

    // 4. Return the provider with value
    return (<ThemeContext value={{
        selectedTheme: selectedTheme,
        isLightTheme: selectedTheme === 'light',
        nextTheme: nextTheme
    }}>
        {children}
    </ThemeContext>
    );
};