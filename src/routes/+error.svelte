<script lang="ts">
  import { page } from "$app/state";
</script>

<div class="flex flex-col items-center justify-center min-h-screen text-center">
  <h1 class="text-6xl font-bold mb-4">{page.status}</h1>
  <p class="text-xl mb-4">{page.error.message}</p>
  <a href="/" class="text-blue-500 hover:underline">Go back home</a>
</div>
