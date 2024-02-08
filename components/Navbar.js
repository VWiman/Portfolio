import { useTheme } from "@/ThemeContext";
import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
	const { state } = useTheme();

	const navClass = `flex flex-row sticky top-0 justify-between bg-${state.theme} shadow-bottom-black pt-10`;
	const ulClass = `flex flex-row items-center border-b border-black bg-${state.theme} ${
		state.theme === "white" ? "text-black border-black" : "text-white border-white"
	} font-medium text-lg`;
	const asideClass = `flex flex-row gap-4 border-x border-black px-2 border-b bg-${state.theme} ${
		state.theme === "white" ? "text-black border-black" : "text-white border-white"
	}`;
	const h1Class = `flex flex-row justify-center border-b text-lg w-full ${
		state.theme === "white" ? "text-black border-black" : "text-white border-white"
		}`;
	const liClass = `border-x ${state.theme === "white" ? "border-black" : "border-white"}  h-full`

	// Collected Tailwind for buttons

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
		{ type: "fontTheme", variant: "sm", label: "A", buttonTailwind: "text-sm" },
		{ type: "fontTheme", variant: "md", label: "A", buttonTailwind: "text-md" },
		{ type: "fontTheme", variant: "lg", label: "A", buttonTailwind: "text-lg" },
	];

	return (
		<nav className={navClass}>
			<ul className={ulClass}>
				<li className={liClass} key="portfolioItem">
					<Link className="inline-block w-full px-2" href={"/"}>
						Portfolio
					</Link>
				</li>
				<li className="h-full" key="cvItem">
					<Link className="inline-block w-full px-2" href={"/Cv"}>
						CV
					</Link>
				</li>
				<li className={liClass} key="contactItem">
					<Link className="inline-block w-full px-2" href={"/Contact"}>
						Contact
					</Link>
				</li>
			</ul>
			<h1 className={h1Class}>
				<span className="hidden font-medium text-xl sm:flex flex-row whitespace-nowrap">Viktor Wiman</span>
			</h1>
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
