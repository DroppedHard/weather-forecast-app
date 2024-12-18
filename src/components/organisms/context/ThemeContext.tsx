/* eslint-disable react-refresh/only-export-components */
import { type ReactNode, createContext, useContext, useState } from "react";

type ThemeContextType = {
	isDarkMode: boolean;
	toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useThemeContext must be used within a ThemeProvider");
	}
	return context;
};

type ThemeProviderProps = {
	children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [isLightMode, setIsLightMode] = useState<boolean>(false);

	const toggleDarkMode = () => {
		setIsLightMode((prevMode) => !prevMode);

		// special treatment for Leaflet map :)
		if (isLightMode) {
			document.body.classList.remove("dark-map");
		} else {
			document.body.classList.add("dark-map");
		}
	};

	return (
		<ThemeContext.Provider value={{ isDarkMode: isLightMode, toggleDarkMode }}>
			{children}
		</ThemeContext.Provider>
	);
};
