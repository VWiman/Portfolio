import { useTheme } from "@/ThemeContext";
import Layout from "@/components/Layout";

export default function Cv() {
	const { state } = useTheme();

	const articleClass = `flex flex-col bg-[rgba(0,_0,_0,_0.01)] self-center items-center sm:items-start pt-5 gap-2 lg:border-x w-full px-10 ${
		state.theme === "white" ? "text-black border-black" : "text-white border-white"
		} inset-shadow-left-right-black min-h-screen`;
	
	const sectionClass = "flex flex-row";

	return (
		<Layout>
			<article className={articleClass}>
				<section className={sectionClass}>
					<p>PLACEHOLDER-CV</p>
				</section>
			</article>
		</Layout>
	);
}
