<script lang="ts">
  import { onMount } from "svelte";
  import { account, avatars } from "$lib/appwrite";

  let loginedIn = $state(false);
  let accountName = $state("Guest");
  let open = $state(false);
  let avatarsUrl = $state("");

  onMount(() => {
    account
      .get()
      .then((user) => {
        loginedIn = true;
        accountName = user.name;
        avatarsUrl = avatars.getInitials(accountName);
      })
      .catch(() => {});
  });
  $effect(() => {
    console.log("loginedIn changed:", loginedIn);
    const result = avatars.getInitials(accountName);
    console.log(result);
  });

  const logoutHandle = () => {
    account.deleteSession("current").then(
      () => {
        loginedIn = false;
        accountName = "Guest";
        avatarsUrl = "";
        open = false;
      },
      (error) => {
        console.log(error);
      },
    );
  };
</script>

<!-- 导航 -->
<nav
  class="flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-md"
>
  <h1 class="text-blue-500 text-2xl font-bold mb-2 md:mb-0">Pdnode Team</h1>
  <ul
    class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-gray-700 font-semibold items-center"
  >
    <li><a href="#home" class="hover:text-blue-500">Home</a></li>
    <li><a href="#about" class="hover:text-blue-500">About</a></li>
    <li><a href="#members" class="hover:text-blue-500">Members</a></li>
    <li><a href="#services" class="hover:text-blue-500">Services</a></li>
    <li><a href="#contact" class="hover:text-blue-500">Contact</a></li>
    {#if loginedIn}
      <div class="relative inline-block text-left">
        <button
          type="button"
          class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onclick={() => (open = !open)}
        >
          <img src={avatarsUrl} alt="" width="40px" height="40px" />
        </button>
        {#if open}
          <div
            class="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
          >
            <div
              class="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <button
                onclick={logoutHandle}
                class="block px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                >Logout
              </button>
            </div>
          </div>
        {/if}
      </div>
    {:else}
      <li>
        <a href="/login" class="hover:text-blue-500">Login / Register</a>
      </li>
    {/if}
  </ul>
</nav>
