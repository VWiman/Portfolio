import { useTheme } from "@/ThemeContext";
import CodeIcon from "@/components/CodeIcon";
import GameIcon from "@/components/GameIcon";
import Layout from "@/components/Layout";
import RadioIcon from "@/components/RadioIcon";

export default function Home() {
	const { state } = useTheme();

	const articleClass = `flex flex-col bg-[rgba(0,_0,_0,_0.01)] self-center items-center sm:items-start pt-5 gap-2 lg:border-x w-full px-10 ${
		state.theme === "white" ? "text-black border-black" : "text-white border-white"
	} inset-shadow-left-right-black min-h-screen`;

	const sectionClass = "flex flex-row";

	const listClass = `flex flex-col aspect-square justify-center items-center p-5 shadow-[rgba(0,_0,_0,_0.1)_0px_0px_18px_5px] bg-[rgba(255,_255,_255,_0.05)]  ${
		state.theme === "white"
			? "hover:bg-[rgba(125,125,125,0.05)] select-none"
			: "hover:bg-[rgba(255,_255,_255,_0.15)] select-none"
	} ${
		state.userPreferences.reduceAnimations === false
			? "transition-all hover:scale-105"
			: null
	}`;

	const schoolPortfolio = [
		{ svg: <RadioIcon />, title: "Radioplayer - React", url: "https://github.com/VWiman/radioplayer-react.git" },
		{ svg: <GameIcon />, title: "Memory game - Vanilla JS", url: "https://github.com/VWiman/Memory.git" },
	];

	return (
		<Layout>
			<article className={articleClass}>
				<h2 className="py-2 font-medium">Studies - Chas Academy</h2>
				<section className={sectionClass}>
					<div className="grid grid-flow-col">
						<ul className="flex flex-col sm:flex-row gap-10">
							{schoolPortfolio.map((item) => {
								return (
									<li key={item.title} className={listClass}>
										{item.svg}
										<h3 className="text-center">{item.title}</h3>
										<a className="flex sm:flex-row justify-center items-center" href={item.url}>
											<CodeIcon />
											<span className="text-xs">&nbsp; github.com/VWiman</span>
										</a>
									</li>
								);
							})}
						</ul>
					</div>
				</section>
			</article>
		</Layout>
	);
}
