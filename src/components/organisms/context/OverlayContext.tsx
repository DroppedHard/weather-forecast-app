/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useState } from "react";
import { ALERT_AUTO_HIDE_DURATION } from "services/config";

type OverlayContextDispatch = {
	showOverlay: (content: JSX.Element) => void;
	hideOverlay: () => void;
	showAlert: (content: JSX.Element) => void;
	hideAlert: () => void;
};

const OverlayContext = createContext<OverlayContextDispatch | undefined>(
	undefined,
);

export const OverlayProvider: React.FC<{ children: JSX.Element }> = ({
	children,
}) => {
	const [overlay, setOverlay] = useState<JSX.Element | null>(null);
	const [alert, setAlert] = useState<JSX.Element | null>(null);
	const [alertTimeout, setAlertTimeout] = useState<NodeJS.Timeout | null>(null);

	const showOverlay = useCallback((content: JSX.Element) => {
		setOverlay(content);
	}, []);

	const hideOverlay = useCallback(() => {
		setOverlay(null);
	}, []);

	const hideAlert = useCallback(() => {
		setAlert(null);
		if (alertTimeout) {
			clearTimeout(alertTimeout);
			setAlertTimeout(null);
		}
	}, [alertTimeout]);

	const showAlert = useCallback(
		(content: JSX.Element) => {
			if (alertTimeout) {
				clearTimeout(alertTimeout);
			}
			setAlert(content);
			const newTimeout = setTimeout(() => {
				hideAlert();
			}, ALERT_AUTO_HIDE_DURATION);
			setAlertTimeout(newTimeout);
		},
		[alertTimeout, hideAlert],
	);

	return (
		<OverlayContext.Provider
			value={{
				showOverlay,
				hideOverlay,
				showAlert,
				hideAlert,
			}}
		>
			{children}
			{overlay}
			{alert}
		</OverlayContext.Provider>
	);
};

export const useOverlay = () => {
	const context = useContext(OverlayContext);
	if (context === undefined) {
		throw new Error("useOverlay must be used within an OverlayProvider");
	}
	return context;
};
