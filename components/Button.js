import { useTheme } from "@/ThemeContext";
import HandleOptionButton from "@/utils/HandleOptionsButton";

export default function Button(props) {
	const { dispatch } = useTheme();

	const { buttonTailwind, type, variant, label, buttonType } = props;

	switch (buttonType) {
		case "optionsButton": {
			return (
				<button className={buttonTailwind} onClick={() => HandleOptionButton(type, variant, dispatch)}>
					{label}
				</button>
			);
		}
		default:
			return <button></button>;
	}
}
