import { IconButton, Tooltip } from "@mui/material";
import { useState } from "react";

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

	const renderContent = () => {
		if (typeof iconOrText === "string") {
			return <span>{iconOrText}</span>;
		}
		return <IconButton onClick={handleTooltipOpen}>{iconOrText}</IconButton>;
	};

	return (
		<Tooltip title={popupText} open={open} onClose={handleTooltipClose}>
			{renderContent()}
		</Tooltip>
	);
}
