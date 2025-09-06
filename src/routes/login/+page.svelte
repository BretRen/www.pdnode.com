<script lang="ts">
  import { account } from "$lib/appwrite";
  import { errorMessages } from "$lib/error";
  import { AppwriteException } from "appwrite";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  let email: string = $state("");
  let password: string = $state("");
  let disabled: boolean = $state(false);
  let error: string | null = $state(null);

  function isEmail(str) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(str);
  }

  onMount(() => {
    account
      .get()
      .then(() => goto("/"))
      .catch(() => {});
  });

  async function submitLogin() {
    if (!isEmail(email)) {
      error = "Please enter a valid email address.";
      return;
    } else if (password.length < 8) {
      error = "Password must be at least 8 characters long.";
      return;
    } else if (!email || !password) {
      error = "Please fill in all fields.";
      return;
    }
    try {
      disabled = true;
      await account.createEmailPasswordSession(email, password);
      goto("/");
    } catch (err: unknown) {
      console.error(err);

      if (err instanceof AppwriteException) {
        console.error(err.type);

        if (errorMessages[err.type]) {
          error = errorMessages[err.type];
        } else {
          error = "An unknown error occurred.";
        }
      } else {
        error = "An unknown error occurred.";
      }
      disabled = false;
    }
  }
</script>

<svelte:head>
  <title>Pdnode | Login</title>
  <meta name="description" content="Login to your account." />
</svelte:head>

<main class="flex flex-col items-center justify-center min-h-screen">
  <h1 class="text-4xl font-bold mb-4">Login</h1>
  <form class="w-full max-w-sm">
    <div class="mb-4">
      <label for="email" class="block text-sm font-medium text-gray-700"
        >Email</label
      >
      <input
        type="email"
        bind:value={email}
        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        required
      />
    </div>
    <div class="mb-4">
      <label for="password" class="block text-sm font-medium text-gray-700"
        >Password</label
      >
      <input
        type="password"
        bind:value={password}
        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        required
      />
    </div>
    <div>
      No account? <a href="/register" class="text-blue-500">Register</a>
    </div>
    <div class="mb-4 text-red-500">{error}</div>
    <button
      type="button"
      {disabled}
      class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-400"
      onclick={() => submitLogin()}>Login</button
    >
    <button
      type="button"
      class="w-full my-4 bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-600 disabled:bg-gray-400"
      onclick={() => (window.location.href = "/")}>Go back to Home</button
    >
  </form>
</main>
