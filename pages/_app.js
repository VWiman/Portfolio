import { useEffect } from "react";
import "../styles/globals.css";
import { ThemeProvider, useTheme } from "../ThemeContext";

function MyApp({ Component, pageProps }) {
	const { state } = useTheme();

	useEffect(() => {
		document.body.className = state.theme;
		console.log(state);
	}, [state]);

	return <Component {...pageProps} />;
}

// Wrap MyApp with ThemeProvider in a named function component
function AppWithTheme({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<MyApp Component={Component} pageProps={pageProps} />
		</ThemeProvider>
	);
}

export default AppWithTheme;
