import { Button } from "@mui/material";

type PersonalizedButtonProps = {
	text: string;
	handleOnClick: () => void;
};

export function PersonalizedButton({
	text,
	handleOnClick,
}: PersonalizedButtonProps) {
	return (
		<Button variant="outlined" onClick={handleOnClick}>
			{text}
		</Button>
	);
}
