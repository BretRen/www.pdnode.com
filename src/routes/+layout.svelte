<script lang="ts">
	let { children } = $props();
	// export const prerender = true;
	import "../style.css";
</script>

<svelte:head>
	<title>Pdnode Team - Official Website</title>
	<meta
		name="description"
		content="Pdnode Team is a group of people with similar interests, working on web, Minecraft, and open source projects."
	/>
	<meta
		name="keywords"
		content="Pdnode, Pdnode Team, Minecraft, Pdnode MC, Pdnode Tech, Pdnode App"
	/>
	<meta name="author" content="Pdnode Team" />

	<!-- Open Graph for social/Google -->
	<meta property="og:title" content="Pdnode Team" />
	<meta
		property="og:description"
		content="A group of people with similar interests, building Pdnode projects."
	/>
	<meta property="og:url" content="https://www.pdnode.com/" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://www.pdnode.com/og-image.png" />

	<!-- Mobile friendly -->
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<link rel="icon" href="/favicon.ico" />
</svelte:head>

{@render children?.()}
