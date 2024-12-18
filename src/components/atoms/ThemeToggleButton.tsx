import { Brightness4, Brightness7 } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useThemeContext } from "components/organisms/context";

export const ThemeToggleButton = () => {
	const { isDarkMode, toggleDarkMode } = useThemeContext();

	return (
		<IconButton
			onClick={toggleDarkMode}
			sx={{ position: "absolute", top: 16, left: 45, zIndex: 50 }}
		>
			{isDarkMode ? <Brightness7 /> : <Brightness4 />}
		</IconButton>
	);
};
