import { useTheme } from "@/ThemeContext";
import Navbar from "./Navbar";

export default function Layout({ children }) {
	const { state } = useTheme();

	const mainClass = `flex flex-col ${state.tailwind} min-h-screen px-40 ${state.userPreferences.fontSize} ${
		state.theme === "white" ? "text-black" : "text-white"
	}`;

	return (
		<div className={`bg-${state.theme}`}>
			<Navbar />
			<main className={mainClass}>{children}</main>
		</div>
	);
}
