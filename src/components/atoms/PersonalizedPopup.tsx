import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import { useState } from "react";

type PersonalizedPopupProps = {
	Icon: JSX.Element;
	PopupContent: JSX.Element;
};

const style = {
	popupStyle: {
		zIndex: 20,
	},
};

export default function PersonalizedPopup({
	Icon,
	PopupContent,
}: PersonalizedPopupProps) {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popper" : undefined;

	return (
		<div style={style.popupStyle}>
			<IconButton onClick={handleClick}>{Icon}</IconButton>
			<Popper id={id} open={open} anchorEl={anchorEl} placement="top">
				<Box
					sx={{
						bgcolor: "background.paper",
						boxShadow: 2,
					}}
				>
					{PopupContent}
				</Box>
			</Popper>
		</div>
	);
}
