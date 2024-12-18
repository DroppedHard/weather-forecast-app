import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import { OverlayProvider } from "components/organisms/context/OverlayContext";
import React from "react";
import { MainScreen } from "screens/MainScreen";

function App() {
	return (
		<OverlayProvider>
			<React.Fragment>
				<CssBaseline />
				<MainScreen />
			</React.Fragment>
		</OverlayProvider>
	);
}

export default App;
