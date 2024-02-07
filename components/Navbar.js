import { useTheme } from "@/ThemeContext";
import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
	const { state } = useTheme();

	const navClass = `flex flex-row sticky top-0 justify-between px-40 pt-5 ${
		state.theme === "white" ? "border-black" : "border-white"
	}`;

	const asideClass = `flex flex-row  gap-4 px-3 border bg-${state.theme} ${
		state.theme === "white" ? "text-black border-black" : "text-white border-white"
	}`;

	const ulClass = `flex flex-row items-center gap-2 p-2 border border-black bg-${state.theme} ${
		state.theme === "white" ? "text-black border-black" : "text-white border-white"
	}`;

	// Collected Tailwind for buttons

	const optionButtons = [
		{
			type: "colorTheme",
			variant: "black",
			label: null,
			buttonTailwind: `h-4 w-4 bg-black self-center ${
				state.theme === "black" ? "border-2 hover:border-2 border-white" : "border-2 border-none"
			}`,
		},
		{
			type: "colorTheme",
			variant: "white",
			label: null,
			buttonTailwind: `h-4 w-4 bg-white self-center ${
				state.theme === "white" ? "border-2 hover:border-2 border-black" : "border-2 border-none"
			}`,
		},
		{
			type: "colorTheme",
			variant: "red-500",
			label: null,
			buttonTailwind: `h-4 w-4 bg-red-500 self-center ${
				state.theme === "red-500" ? "border-2 hover:border-2 border-white" : "border-none"
			}`,
		},
		{
			type: "colorTheme",
			variant: "blue-500",
			label: null,
			buttonTailwind: `h-4 w-4 bg-blue-500 self-center ${
				state.theme === "blue-500" ? "border-2 hover:border-2 border-white" : "border-none"
			}`,
		},
		{ type: "fontTheme", variant: "sm", label: "A", buttonTailwind: "text-sm" },
		{ type: "fontTheme", variant: "md", label: "A", buttonTailwind: "text-md" },
		{ type: "fontTheme", variant: "lg", label: "A", buttonTailwind: "text-lg" },
	];

	return (
		<nav className={navClass}>
			<ul className={ulClass}>
				<li key="portfolioItem">
					<Link href={"/"}>Portfolio</Link>
				</li>
				<li key="cvItem">
					<Link href={"/cv"}>CV</Link>
				</li>
				<li key="contactItem">
					<Link href={"/contact"}>Contact</Link>
				</li>
			</ul>

			<aside className={asideClass}>
				{optionButtons.map(({ type, variant, label, buttonTailwind }) => {
					return (
						<Button
							key={variant + type}
							buttonType="optionsButton"
							type={type}
							variant={variant}
							label={label}
							buttonTailwind={buttonTailwind}></Button>
					);
				})}
			</aside>
		</nav>
	);
}
