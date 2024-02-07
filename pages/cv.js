import Layout from "@/components/Layout";

export default function cv() {
	const articleClass = "flex flex-col pt-5 self-center max-w-fit p-5 gap-2";
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
