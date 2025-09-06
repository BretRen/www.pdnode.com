<script lang="ts">
	let { children } = $props();
	// export const prerender = true;
	import "../style.css";
</script>

<svelte:head>
	<title>Pdnode Website</title>
	<meta
		name="description"
		content="A group of people with similar interests."
	/>
	<link rel="icon" href="/favicon.ico" />
</svelte:head>

{@render children?.()}
