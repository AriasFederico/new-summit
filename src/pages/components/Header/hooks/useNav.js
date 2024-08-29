import { useState } from "react";
export const useNav = () => {
	const [navActive, setNavActive] = useState(false);

	const handleNav = () => {
		setNavActive(!navActive);
	};

	const closeNav = () => {
		setNavActive(false);
	};

	return { navActive, closeNav, handleNav };
};
