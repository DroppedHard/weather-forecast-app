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
		bottom: moleculeStyles.positionedCard.bottom,
		"top-right": moleculeStyles.positionedCard.topRight,
	};
	return (
		<Box
			component="div"
			sx={{
				...moleculeStyles.positionedCard,
				...positionMap[placement],
			}}
		>
			{children}
		</Box>
	);
};
