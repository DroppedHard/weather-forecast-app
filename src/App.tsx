import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import React from "react";
import { MainScreen } from "screens/MainScreen";

function App() {
	return (
		<React.Fragment>
			<CssBaseline />
			<MainScreen />
		</React.Fragment>
	);
}

export default App;
