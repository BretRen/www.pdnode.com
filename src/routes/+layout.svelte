<script lang="ts">
	let { children } = $props();
	export const prerender = true;
	import "../style.css";
</script>

<svelte:head></svelte:head>

{@render children?.()}
