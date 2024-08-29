import { createContext, useEffect, useState } from 'react';

export const GlobalContext = createContext();

export const Provider = ({ children }) => {
	const [logged, setLogged] = useState(false);
	const [user, setUser] = useState(null);

	return (
		<GlobalContext.Provider value={{ logged, setLogged, user }}>
			{children}
		</GlobalContext.Provider>
	);
};
