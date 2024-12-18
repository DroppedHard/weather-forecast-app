import { useState } from "react";
import { LocationPermissionModal } from "../components/molecules";
import { BackgroundMap } from "../components/organisms";

export function MainScreen() {
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
