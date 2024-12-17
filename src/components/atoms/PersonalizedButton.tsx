import { Button } from "@mui/material";

type PersonalizedButtonProps = {
	text: string;
	handleOnClick: () => void;
};

export function PersonalizedButton(props: PersonalizedButtonProps) {
	const { text, handleOnClick } = props;
	return (
		<Button variant="outlined" onClick={handleOnClick}>
			{text}
		</Button>
	);
}
