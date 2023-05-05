import { useEffect, useState } from "react";

export const useIsAnimated = (dep: any) => {
	const [isAnimated, setIsAnimated] = useState(false);

	useEffect(() => {
		setIsAnimated(true);

		const id = setTimeout(() => {
			setIsAnimated(false);
		}, 1000);

		return () => {
			clearTimeout(id);
		};
	}, [dep]);

	return isAnimated;
};
