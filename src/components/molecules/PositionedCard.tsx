import { Box } from "@mui/material";
import { moleculeStyles } from "styles/generalStyles";

type PositionedCardProps = {
	children: React.ReactNode;
	placement?: "top-right" | "bottom";
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
				...moleculeStyles.positionedCard,
				...positionMap[placement],
			}}
		>
			{children}
		</Box>
	);
};
