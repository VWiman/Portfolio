import { useTheme } from "@/ThemeContext";
import Layout from "@/components/Layout";

export default function Cv() {
	const { state } = useTheme();
	const articleClass = `flex flex-col self-center pt-5 gap-2 lg:border-x w-full px-10 ${
		state.theme === "white" ? "text-black border-black" : "text-white border-white"
	} inset-shadow-left-right-black min-h-screen`;
	const sectionClass = "flex flex-row";

	return (
		<Layout>
			<article className={articleClass}>
				<section className={sectionClass}>
					<p>Här kommer det stå massa text om min cv...</p>
				</section>
			</article>
		</Layout>
	);
}
