type PositionedCardProps = {
	children: React.ReactNode;
	position?: "absolute" | "fixed";
	top?: number | string;
	right?: number | string;
	bottom?: number | string;
	left?: number | string;
	width?: number | string;
	height?: number | string;
};

const styles = {
	forecastWrapper: {
		position: "absolute" as const,
		backgroundColor: "rgba(255, 255, 255, 0.9)",
		borderRadius: "8px",
		boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
		padding: "1rem",
		zIndex: 10,
	},
};

export const PositionedCard = ({
	children,
	position = "absolute",
	top,
	right,
	bottom,
	left,
	width = 300,
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
