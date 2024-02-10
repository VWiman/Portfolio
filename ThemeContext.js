import React, { createContext, useContext, useReducer } from "react";

const ThemeContext = createContext();

const initialState = {
	theme: "white",
	userPreferences: {
		fontSize: "text-base",
		reduceAnimations: false,
	},
};

function themeReducer(state, action) {
	const { type, variant } = action;
	switch (type) {
		case "colorTheme": {
			return { ...state, theme: variant, tailwind: `bg-${variant}` };
		}
		case "reduceAnimation": {
			return {
				...state,
				userPreferences: { ...state.userPreferences, reduceAnimations: variant }
			}
		}
		case "fontTheme": {
			return {
				...state,
				userPreferences: { ...state.userPreferences, fontSize: `text-${variant}` },
			};
		}
		default:
			return state;
	}
}

export const ThemeProvider = ({ children }) => {
	const [state, dispatch] = useReducer(themeReducer, initialState);
	return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
