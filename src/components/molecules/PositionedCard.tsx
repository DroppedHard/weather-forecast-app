type PositionedCardProps = {
	children: React.ReactNode;
	position?: "absolute" | "fixed"; // Default is "absolute"
	top?: number | string; // Can use numbers (px) or percentages
	right?: number | string;
	bottom?: number | string;
	left?: number | string;
	width?: number | string; // Allow customizable width
	height?: number | string; // Optional height
};

const styles = {
	forecastWrapper: {
		position: "absolute" as const,
		backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent background
		borderRadius: "8px",
		boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
		padding: "1rem",
		zIndex: 0,
	},
};

export const PositionedCard = ({
	children,
	position = "absolute",
	top,
	right,
	bottom,
	left,
	width = 300, // Default width
	height,
}: PositionedCardProps) => {
	return (
		<div
			style={{
				...styles.forecastWrapper,
				position,
				top,
				right,
				bottom,
				left,
				width,
				height,
			}}
		>
			{children}
		</div>
	);
};
