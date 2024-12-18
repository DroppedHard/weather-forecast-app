/* eslint-disable react-refresh/only-export-components */
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
	CssBaseline,
	ThemeProvider as MuiThemeProvider,
	createTheme,
} from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
	OverlayProvider,
	ThemeProvider,
	useThemeContext,
} from "components/organisms/context";
import React from "react";

import { MainScreen } from "screens/MainScreen";

const queryClient = new QueryClient();

function App() {
	const { isDarkMode } = useThemeContext();

	const theme = createTheme({
		palette: {
			mode: isDarkMode ? "dark" : "light",
		},
		// maybe customize other styles like typography, components, etc.
	});
	return (
		<MuiThemeProvider theme={theme}>
			<OverlayProvider>
				<QueryClientProvider client={queryClient}>
					<React.Fragment>
						<CssBaseline />
						<MainScreen />
					</React.Fragment>
				</QueryClientProvider>
			</OverlayProvider>
		</MuiThemeProvider>
	);
}

export default () => (
	<ThemeProvider>
		<App />
	</ThemeProvider>
);
