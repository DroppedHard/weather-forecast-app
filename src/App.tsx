import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { OverlayProvider } from "components/organisms/context/OverlayContext";
import React from "react";
import { MainScreen } from "screens/MainScreen";

const queryClient = new QueryClient();

function App() {
	return (
		<OverlayProvider>
			<QueryClientProvider client={queryClient}>
				<React.Fragment>
					<CssBaseline />
					<MainScreen />
				</React.Fragment>
			</QueryClientProvider>
		</OverlayProvider>
	);
}

export default App;
