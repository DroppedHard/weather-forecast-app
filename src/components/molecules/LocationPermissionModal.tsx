import { Box, Link, Modal, Typography } from "@mui/material";
import { PersonalizedButton } from "../atoms/PersonalizedButton";

type LocationPermissionModalProps = {
	handleClose: () => void;
	isOpen: boolean;
};

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export default function LocationPermissionModal(
	props: LocationPermissionModalProps,
) {
	const { handleClose, isOpen } = props;

	const askForPermission = () => {
		if (!navigator.geolocation) {
			console.error("Geolocation is not supported by your browser.");
			return;
		}
		navigator.geolocation.getCurrentPosition(
			(position) => {
				const { latitude, longitude } = position.coords;
				console.log({ latitude, longitude });
			},
			(err) => {
				console.error(`Error: ${err.message}`);
			},
		);
	};
	return (
		<Modal
			open={isOpen}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					Prośba o dostęp do lokalizacji
				</Typography>
				<Typography id="modal-modal-description" sx={{ mt: 2 }}>
					Jest niezbędna by pokazać prognozę pogody i inne dane w Twojej
					okolicy. Geolokalizacja zostanie użyta tylko i wyłącznie do{" "}
					<Link href="https://open-meteo.com">
						pobrania odpowiednich danych
					</Link>{" "}
					niezbędnych do wyświetlanych informacji.
				</Typography>
				<div>
					<PersonalizedButton
						text={"Udostępnij lokalizację"}
						handleOnClick={askForPermission}
					/>
					<PersonalizedButton text={"Kontynuuj"} handleOnClick={handleClose} />
				</div>
			</Box>
		</Modal>
	);
}
