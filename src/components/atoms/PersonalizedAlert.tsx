import CloseIcon from "@mui/icons-material/Close";
import { Alert, IconButton } from "@mui/material";
import { useOverlay } from "components/organisms/context";
import { atomStyles } from "styles/generalStyles";
import type { PersonalizedAlertProps } from "types/types";

export const PersonalizedAlert = ({
	message,
	severity,
}: PersonalizedAlertProps) => {
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
			sx={atomStyles.personalizedAlert}
		>
			{message}
		</Alert>
	);
};
