import { IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import { atomStyles } from "styles/generalStyles";

type PersonalizedPopupProps = {
	iconOrText: JSX.Element | string;
	popupText: string;
};

export default function PersonalizedPopup({
	iconOrText,
	popupText,
}: PersonalizedPopupProps) {
	const [open, setOpen] = useState(false);
	const handleTooltipOpen = () => {
		setOpen(true);
	};
	const handleTooltipClose = () => {
		setOpen(false);
	};
	const handleString = (iconOrText: JSX.Element | string) => {
		if (typeof iconOrText === "string")
			return (
				<span style={atomStyles.personalizedPopup.tableStringFont}>
					{iconOrText}
				</span>
			);
		return iconOrText;
	};
	return (
		<Tooltip title={popupText} open={open} onClose={handleTooltipClose}>
			<IconButton onClick={handleTooltipOpen}>
				{handleString(iconOrText)}
			</IconButton>
		</Tooltip>
	);
}
