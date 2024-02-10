import { useTheme } from "@/ThemeContext";
import Link from "next/link";
import Button from "./Button";
import NameLogo from "./NameLogo";
import AnimationButton from "./AnimationButton";

export default function Navbar() {
	const { state } = useTheme();

	const navClass = `flex flex-row sticky top-0 justify-between bg-${state.theme} shadow-bottom-black pt-10`;

	const ulClass = `flex flex-row items-center border-b border-black bg-${state.theme} ${
		state.theme === "white" ? "text-black border-black" : "text-white border-white"
	} font-medium text-lg`;

	const asideClass = `flex flex-row gap-4 sm:border-l lg:border-x border-black px-2 border-b bg-${state.theme} ${
		state.theme === "white" ? "text-black border-black" : "text-white border-white"
	}`;

	const h1Class = `flex flex-row justify-center border-b text-lg w-full ${
		state.theme === "white" ? "text-black border-black" : "text-white border-white"
	}`;

	const liClass = `flex items-center justify-center ${
		state.theme === "white"
			? "border-black hover:bg-[rgba(125,125,125,0.05)] hover:border-t border-t-" +
			  state.theme +
			  " hover:border-t-black select-none"
			: "border-white hover:bg-[rgba(255,_255,_255,_0.15)] hover:border-t border-t-" +
			  state.theme +
			  " hover:border-t-white select-none"
	} h-full`;

	const optionButtons = [
		{
			type: "colorTheme",
			variant: "gray-800",
			label: null,
			buttonTailwind: `h-4 w-4 bg-gray-800 self-center ${
				state.theme === "gray-800" ? "border-2 border-white" : "border-2 border-none"
			}`,
		},
		{
			type: "colorTheme",
			variant: "white",
			label: null,
			buttonTailwind: `h-4 w-4 bg-white self-center ${
				state.theme === "white" ? "border-2 border-black" : "border-2 border-none"
			}`,
		},
		{
			type: "colorTheme",
			variant: "red-500",
			label: null,
			buttonTailwind: `h-4 w-4 bg-red-500 self-center ${
				state.theme === "red-500" ? "border-2 border-white" : "border-none"
			}`,
		},
		{
			type: "colorTheme",
			variant: "blue-500",
			label: null,
			buttonTailwind: `h-4 w-4 bg-blue-500 self-center ${
				state.theme === "blue-500" ? "border-2 border-white" : "border-none"
			}`,
		},
		{ type: "fontTheme", variant: "xs", label: "A", buttonTailwind: "text-xs" },
		{ type: "fontTheme", variant: "lg", label: "A", buttonTailwind: "text-sm" },
		{ type: "fontTheme", variant: "2xl", label: "A", buttonTailwind: "text-md" },
	];

	return (
		<nav className={navClass}>
			<ul className={ulClass}>
				<li className={`lg:border-x ${liClass}`} key="portfolioItem">
					<Link className="inline-block w-full px-2 text-sm sm:text-lg" href={"/"}>
						Portfolio
					</Link>
				</li>
				<li className={`${liClass}`} key="cvItem">
					<Link className="inline-block w-full px-2 text-sm sm:text-lg" href={"/cv"}>
						CV
					</Link>
				</li>
				<li className={`lg:border-x ${liClass} sm:border-r`} key="contactItem">
					<Link className="inline-block w-full px-2 text-sm sm:text-lg" href={"/contact"}>
						Contact
					</Link>
				</li>
			</ul>
			<h1 className={h1Class}>
				<NameLogo />
			</h1>
			<aside className={asideClass}>
			<AnimationButton />
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
