export const generalStyles = {
	justifySpaceEvenly: {
		display: "flex",
		justifyContent: "space-between",
	},
};

export const atomStyles = {
	personalizedAlert: {
		position: "absolute",
		top: 20,
		left: "50%",
		transform: "translateX(-50%)",
		zIndex: 9999,
		width: "auto",
	},
	themeToggleButton: {
		position: "absolute",
		top: 16,
		left: 45,
		zIndex: 50,
	},
};

export const moleculeStyles = {
	locationPermissionModal: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
	},
	positionedCard: {
		position: "absolute" as const,
		zIndex: 20,
		borderRadius: "5px",
	},
};

export const organismStyles = {
	backgroundMap: {
		height: "100vh",
		width: "100%",
		zIndex: 10,
	},
	forecastTable: {
		buttonBox: {
			display: "flex",
			justifyContent: "flex-end",
		},
		table: {
			maxWidth: "300px",
			maxHeight: "300px",
		},
		infoIcon: {
			fontSize: 12,
		},
		headerText: {
			fontSize: 12,
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			lineHeight: 1.2,
		},
		tableCell: {
			fontSize: 12,
			textAlign: "center",
			padding: "4px 8px",
		},
	},
	summaryFooter: { minWidth: 275 },
};
