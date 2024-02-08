import { useTheme } from "@/ThemeContext";
import CodeIcon from "@/components/CodeIcon";
import Layout from "@/components/Layout";

export default function Home() {
	const { state } = useTheme();
	const articleClass = `flex flex-col bg-[rgba(0,_0,_0,_0.01)] self-center pt-5 gap-2 lg:border-x w-full px-10 ${
		state.theme === "white" ? "text-black border-black" : "text-white border-white"
	} inset-shadow-left-right-black min-h-screen`;
	const sectionClass = "flex flex-row";

	return (
		<Layout>
			<article className={articleClass}>
				<h2 className="text-xl py-2 font-medium">Studies - Chas Academy</h2>
				<section className={sectionClass}>
					<grid className="grid">
						<div className="grid-flow-col">
							<div className="flex flex-row gap-10">
								<div className="p-5 shadow-[rgba(0,_0,_0,_0.2)_0px_0px_20px_5px]">
									<h3>Radioplayer - React</h3>
									<a
										className="flex flex-row justify-center items-center"
										href="https://github.com/VWiman/radioplayer-react.git">
										<CodeIcon />
										<span className="text-xs">&nbsp; github.com/VWiman</span>
									</a>
								</div>
								<div className="p-5 shadow-[rgba(0,_0,_0,_0.2)_0px_0px_20px_5px]">
									<h3>Memory game - Vanilla JS</h3>
									<a className="flex flex-row justify-center items-center" href="https://github.com/VWiman/Memory.git">
										<CodeIcon />
										<span className="text-xs">&nbsp; github.com/VWiman</span>
									</a>
								</div>
							</div>
						</div>
					</grid>
				</section>
			</article>
		</Layout>
	);
}
