import { useTheme } from "@/ThemeContext";
import HandleOptionButton from "@/utils/HandleOptionsButton";

export default function AnimationButton() {
	const { state, dispatch } = useTheme();
	const type = "reduceAnimation";

	return (
		<div
			className="flex items-center select-none cursor-pointer"
			onClick={() => {
				HandleOptionButton(type, !state.userPreferences.reduceAnimations, dispatch);
			}}>
			<label className="cursor-pointer text-sm" htmlFor="reduce">
				Animations&nbsp;
			</label>
			<button
				className={`border-2 flex items-center justify-center h-4 w-4 rounded-lg self-center ${
					state.theme === "white" ? " border-black" : " border-white"
				}`}>
				{state.userPreferences.reduceAnimations === false ? (
					<span className={`block h-2 w-2 rounded-lg ${state.theme === "white" ? " bg-gray-800" : " bg-white"}`}></span>
				) : null}
			</button>
		</div>
	);
}
