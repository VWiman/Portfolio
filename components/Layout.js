import { useTheme } from "@/ThemeContext";
import Navbar from "./Navbar";

export default function Layout({ children }) {
	const { state } = useTheme();

	const mainClass = `flex flex-col min-h-screen ${state.userPreferences.fontSize} ${
		state.theme === "white" ? "text-black" : "text-white"
	}`;

	return (
		<div className={`bg-${state.theme} lg:px-20 overflow-hidden sm:overflow-visible`}>
			<Navbar />
			<main className={mainClass}>{children}</main>
		</div>
	);
}
