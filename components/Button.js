import { useTheme } from "@/ThemeContext";
import { handleOptionButton } from "@/utils/handleOptionsButton";

export default function Button(props) {
	const { dispatch } = useTheme();

	const { buttonTailwind, type, variant, label, buttonType } = props;

	switch (buttonType) {
		case "optionsButton": {
			return (
				<button className={buttonTailwind} onClick={() => handleOptionButton(type, variant, dispatch)}>
					{label}
				</button>
			);
		}
		default:
			return <button></button>;
	}
}
