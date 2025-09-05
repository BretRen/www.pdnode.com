<script>
  const teamMembers = [
    {
      name: "Bret",
      joined: "2024-07-10",
      position: "Founder",
      mainTasks: "Full-stack Development",
      introduce: "Responsible for the main development of Pdnode.",
    },
    {
      name: "Mark",
      joined: "Unknown",
      position: "Admin",
      mainTasks: "Front-end Development",
      introduce: "Focus on front-end development of Nextjs and Mui+react.",
    },
    {
      name: "owg",
      joined: "2025-07-01",
      position: "Member",
      mainTasks: "Pdnode MC Management",
      introduce: "Responsible for the management and maintenance of Pdnode MC.",
    },
  ];

  const services = [
    "ChatRoom",
    "Pdnode MC(due 9.8)",
    "Website Development",
    "Pdnode.tech",
    "pdnode.app",
  ];

  import Nav from "$components/Nav.svelte";
</script>

<div class="flex flex-col min-h-screen font-sans text-gray-800">
  <Nav />

  <hr class="h-px w-full bg-gray-300 border-0" />

  <!-- 欢迎区 -->
  <section
    id="home"
    class="flex flex-col items-center justify-center text-center py-16 bg-gray-50 px-4 md:px-20"
  >
    <h2 class="text-3xl md:text-5xl font-bold mb-4">Welcome to Pdnode Team</h2>
    <p class="text-lg md:text-xl text-gray-600 max-w-2xl">
      A group of people with similar interests.
    </p>
  </section>

  <!-- About -->
  <section id="about" class="py-16 px-4 md:px-20">
    <h2 class="text-3xl font-bold text-blue-500 mb-4">About Us</h2>
    <p class="text-gray-700 mb-2">
      Pdnode is a group of people with the same interests. Founded on
      2024-07-10.
    </p>
  </section>

  <!-- Team Members -->
  <section id="members" class="py-16 px-4 md:px-20 bg-gray-50">
    <h2 class="text-3xl font-bold text-blue-500 mb-8 text-center md:text-left">
      Our Team Members
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
      {#each teamMembers as member}
        <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 class="text-xl font-bold mb-2">{member.name}</h3>
          <p class="text-gray-500 text-sm mb-1">
            <strong>Joined:</strong>
            {member.joined}
          </p>
          <p class="text-gray-500 text-sm mb-1">
            <strong>Position:</strong>
            {member.position}
          </p>
          <p class="text-gray-500 text-sm mb-1">
            <strong>Main tasks:</strong>
            {member.mainTasks}
          </p>
          <p class="text-gray-700 mt-2">{member.introduce}</p>
        </div>
      {/each}
    </div>
  </section>

  <!-- Services -->
  <section id="services" class="py-16 px-4 md:px-20">
    <h2 class="text-3xl font-bold text-blue-500 mb-8 text-center md:text-left">
      Services
    </h2>
    <ul
      class="list-disc list-inside space-y-2 text-gray-700 max-w-xl mx-auto md:mx-0"
    >
      {#each services as service}
        <li>{service}</li>
      {/each}
    </ul>
  </section>

  <!-- Contact -->
  <section id="contact" class="py-16 px-4 md:px-20 bg-gray-50">
    <h2 class="text-3xl font-bold text-blue-500 mb-4 text-center md:text-left">
      Contact Us
    </h2>
    <p class="text-gray-700 mb-2"><strong>Email:</strong> contact@pdnode.com</p>
    <p class="text-gray-700 mb-2">
      <strong>Github Issues:</strong>
      <a
        href="https://github.com/BretRen/pdnode/issues"
        class="text-blue-500 hover:underline">Here</a
      >
    </p>
  </section>

  <!-- Footer -->
  <footer
    class="py-6 px-4 md:px-20 bg-white border-t border-gray-200 text-gray-600 text-sm text-center md:text-left"
  >
    © 2025 Pdnode. All rights reserved. · <a
      href="https://forum.pdnode.com/d/5-pdnode-terms-of-service"
      class="hover:underline">Terms</a
    >
    ·
    <a
      href="https://forum.pdnode.com/d/6-pdnode-privacy-policy"
      class="hover:underline">Privacy</a
    >
  </footer>
</div>
