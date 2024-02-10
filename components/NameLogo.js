// This is an SVG as I plan to change it in the future
import { useTheme } from "@/ThemeContext";

export default function NameLogo() {
	const { state } = useTheme();

	const black = "#000000";
	const white = "#ffffff";

	const textColor = state.theme === "white" ? black : white;

	return (
		<svg className="hidden md:flex md:flex-row" width="250" height="40" xmlns="http://www.w3.org/2000/svg">
			<text
				className="hidden sm:flex sm:flex-row"
				x="125"
				y="20"
				fontFamily="proxima-nova"
				fontSize="30"
				fill={textColor}
				fontWeight="bold"
				letterSpacing="2"
				textAnchor="middle"
				dominantBaseline="central">
				VIKTOR WIMAN
			</text>
		</svg>
	);
}
