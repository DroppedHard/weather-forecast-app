import { useState } from "react";
import LocationPermissionModal from "../components/molecules/LocationPermissionModal";
import { BackgroundMap } from "../components/organism/BackgroundMap";

export default function MainScreen() {
	const [permissionModalDisplayed, setPpermissionModalDisplayed] =
		useState(true);
	return (
		<>
			<BackgroundMap />
			<LocationPermissionModal
				handleClose={() => setPpermissionModalDisplayed(false)}
				isOpen={permissionModalDisplayed}
			/>
		</>
	);
}
