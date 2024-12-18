import { Brightness4, Brightness7 } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useThemeContext } from "components/organisms/context";
import { atomStyles } from "styles/generalStyles";

export const ThemeToggleButton = () => {
	const { isDarkMode, toggleDarkMode } = useThemeContext();

	return (
		<IconButton onClick={toggleDarkMode} sx={atomStyles.themeToggleButton}>
			{isDarkMode ? <Brightness7 /> : <Brightness4 />}
		</IconButton>
	);
};
