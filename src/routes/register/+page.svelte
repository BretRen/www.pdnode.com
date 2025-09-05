<script lang="ts">
  import { account, ID } from "$lib/appwrite";
  import { errorMessages } from "$lib/error";
  import { AppwriteException } from "appwrite";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  let email: string = $state("");
  let password: string = $state("");
  let name: string = $state("");

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

  async function submitReg() {
    if (!isEmail(email)) {
      error = "Please enter a valid email address.";
      return;
    }
    try {
      if (!email || !password || !name) {
        error = "Please fill in all fields.";
        return;
      }

      disabled = true;

      await account.create(ID.unique(), email, password, name);
      goto("/login");
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
  <title>Pdnode | Register</title>
  <meta name="description" content="Register for an account." />
</svelte:head>

<main class="flex flex-col items-center justify-center min-h-screen">
  <h1 class="text-4xl font-bold mb-4">Register</h1>
  <form class="w-full max-w-sm">
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700"
        >Name</label
      >
      <input
        type="text"
        bind:value={name}
        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        required
      />
    </div>
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
      Have account? <a href="/login" class="text-blue-500">Login</a>
    </div>
    <div class="mb-4 text-red-500">{error}</div>
    <button
      type="button"
      {disabled}
      class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-400"
      onclick={() => submitReg()}>Register</button
    >
  </form>
</main>
