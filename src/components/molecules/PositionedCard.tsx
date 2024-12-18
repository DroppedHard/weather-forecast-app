import { Box, useTheme } from "@mui/material";

type PositionedCardProps = {
	children: React.ReactNode;
	placement?: "top-right" | "bottom";
};

const styles = {
	positionedCard: {
		position: "absolute" as const,
		zIndex: 10,
		border: "1px solid",
		borderRadius: "5px",
	},
};

export const PositionedCard = ({
	children,
	placement = "top-right",
}: PositionedCardProps) => {
	const theme = useTheme();
	const borderColor = theme.palette.mode === "dark" ? "#fff" : "#000";
	const positionMap = {
		bottom: {
			bottom: 15,
			left: "50%",
			transform: "translate(-50%)",
		},
		"top-right": {
			top: 15,
			right: 15,
		},
	};
	return (
		<Box
			style={{
				...styles.positionedCard,
				borderColor,
				...positionMap[placement],
			}}
		>
			{children}
		</Box>
	);
};
