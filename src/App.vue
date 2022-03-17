<template>
  <nav class="bg-slate-900 shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-7">
          <div>
            <!-- Website Logo -->
            <router-link to="/" class="flex items-center py-4 px-2">
              <span class="font-semibold text-gray-500 text-2xl"
                ><h1>Max Pochet</h1></span
              >
            </router-link>
          </div>
          <!-- Primary Navbar items -->
          <div class="hidden md:flex items-center space-x-">
            <a
              href="/#apropos"
              class="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold"
              >A propos</a
            >
            <a
              href="/#education"
              class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >Education</a
            >
            <a
              href="/#competences"
              class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >Compétences</a
            >
            <a
              href="/#expPro"
              class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >Expériences pro</a
            >
            <a
              href="/#loisirs"
              class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >Loisirs</a
            >
            <router-link
              to="/projets"
              class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >Mes projets</router-link
            >
            <router-link
              to="/login"
              class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >Login</router-link
            >
          </div>
        </div>
        <!-- Secondary Navbar items -->
        <div class="hidden md:flex items-center space-x-3">
          <a
            href="/contact"
            class="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
            >Contact</a
          >
          <a
            href="https://firebasestorage.googleapis.com/v0/b/ecvvue.appspot.com/o/cvMaxPochet.pdf?alt=media&token=018bec56-9594-4f7f-a639-f0e66f297c21"
            target="_blank"
            download
            class="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300"
            >Mon cv</a
          >
        </div>
        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button class="outline-none mobile-menu-button">
            <svg
              class="w-6 h-6 text-gray-500 hover:text-green-500"
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <div class="hidden mobile-menu">
      <ul class="">
        <li>
          <a
            href="/"
            class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
            >Acceuil</a
          >
        </li>
        <li>
          <a
            href="/projet"
            class="block text-sm px-2 py-4 text-white hover:bg-green-500 transition duration-300"
            >Mes projets</a
          >
        </li>
        <li>
          <a
            href="/contact"
            class="block text-sm px-2 py-4 text-white hover:bg-green-500 transition duration-300"
            >Contact</a
          >
        </li>
        <li>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/ecvvue.appspot.com/o/cvMaxPochet.pdf?alt=media&token=018bec56-9594-4f7f-a639-f0e66f297c21"
            target="_blank"
            download
            class="block text-sm px-2 py-4 text-white hover:bg-green-500 transition duration-300"
            >Mon CV</a
          >
        </li>
      </ul>
    </div>
    <!-- <script>
          const btn = document.querySelector("button.mobile-menu-button");
          const menu = document.querySelector(".mobile-menu");

          btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
          });
        </script> -->
  </nav>
  <router-view></router-view>
  <footer>
    <h2>© 2021 Copyright : Max Pochet</h2>
  </footer>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
