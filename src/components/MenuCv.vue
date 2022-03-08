<template>
  <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <title>Welcome!</title>
      <link rel="stylesheet" href="{{asset('css/home.css?version=1')}}" />
      <!-- <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" /> -->
      <!-- <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script> -->
      <!-- <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      /> -->
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossorigin="anonymous"
      />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 128 128%22><text y=%221.2em%22 font-size=%2296%22>⚫️</text></svg>"
      />
      <!-- <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script> -->
      <meta
        name="description"
        content="Je suis un étudiant en licence professionnelle développement internet et mobile. J'habite à Calais et je possède le permis b, ce qui me permet de me déplacer sur tout le littoral mais aussi sur la région lilloise."
      />
      <meta name="keywords" content="Etudiant, licence, informatique" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
      <nav class="bg-slate-900 shadow-lg">
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex justify-between">
            <div class="flex space-x-7">
              <div>
                <!-- Website Logo -->
                <a href="/" class="flex items-center py-4 px-2">
                  <span class="font-semibold text-gray-500 text-2xl"
                    ><h1>Max Pochet</h1></span
                  >
                </a>
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
                <a
                  href="/projet"
                  class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                  >Mes projets</a
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
                href="{{asset('ressources/cvMaxPochet.pdf')}}"
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
                href="../../public/ressources/cvMaxPochet.pdf"
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
    </body>
    <!-- <script>
      AOS.init();
    </script> -->
  </html>
</template>

<script>
export default {
  name: "MenuCv",
  props: {
    msg: String,
  },
};
</script>
