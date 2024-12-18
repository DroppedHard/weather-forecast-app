import { Box } from "@mui/material";

type PositionedCardProps = {
	children: React.ReactNode;
	placement?: "top-right" | "bottom";
};

const styles = {
	positionedCard: {
		position: "absolute" as const,
		zIndex: 20,
		borderRadius: "5px",
	},
};

export const PositionedCard = ({
	children,
	placement = "top-right",
}: PositionedCardProps) => {
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
				...positionMap[placement],
			}}
		>
			{children}
		</Box>
	);
};
