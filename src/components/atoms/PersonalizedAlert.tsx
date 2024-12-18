import CloseIcon from "@mui/icons-material/Close";
import { Alert, IconButton } from "@mui/material";
import { useOverlay } from "components/organisms/context";
import type { PersonalizedAlertProps } from "types/types";

export function PersonalizedAlert({
	message,
	severity,
}: PersonalizedAlertProps) {
	const { hideAlert } = useOverlay();

	const action = (
		<IconButton
			aria-label="close"
			color="inherit"
			size="small"
			onClick={() => {
				hideAlert();
			}}
		>
			<CloseIcon fontSize="inherit" />
		</IconButton>
	);
	return (
		<Alert
			severity={severity}
			action={action}
			sx={{
				position: "absolute",
				top: 20,
				left: "50%",
				transform: "translateX(-50%)",
				zIndex: 9999,
				width: "auto",
			}}
		>
			{message}
		</Alert>
	);
}
