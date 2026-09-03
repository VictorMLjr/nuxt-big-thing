<template>
  <div class="min-h-screen px-6 py-12">
    <div class="mx-auto max-w-5xl">
      <section class="mb-12 text-center">
        <img
          src="/PvZ2.webp"
          alt="PvZ2"
          class="mx-auto mb-6 h-28 w-28 object-contain"
        />
        <h1 class="text-5xl font-bold text-green-800">
          PvZ2 Almanac
        </h1>
        <div class="mx-auto mt-4 h-1 w-20 rounded-full bg-green-500"></div>
        <p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Explore Plants vs. Zombies 2 through a simple web-based almanac.
          Browse plants, zombies, and areas without having to open the game.
        </p>
      </section>
      <section>
        <h2 class="mb-6 text-center text-3xl font-bold text-green-800">
          Quick Links
        </h2>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <NuxtLink
            to="/plants"
            class="group rounded-2xl border border-green-200 bg-white p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-green-400 hover:shadow-xl"
          >
            <div
              class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl transition-transform duration-300 group-hover:scale-110"
            >
              🌱
            </div>
            <h3 class="text-xl font-bold text-green-800">
              Plants
            </h3>
            <p class="mt-2 text-sm text-gray-600">
              Browse the plants available in PvZ2.
            </p>
          </NuxtLink>
          <NuxtLink
            to="/zombies"
            class="group rounded-2xl border border-green-200 bg-white p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-green-400 hover:shadow-xl"
          >
            <div
              class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl transition-transform duration-300 group-hover:scale-110"
            >
              🧟
            </div>
            <h3 class="text-xl font-bold text-green-800">
              Zombies
            </h3>
            <p class="mt-2 text-sm text-gray-600">
              Explore zombies and their information.
            </p>
          </NuxtLink>
          <NuxtLink
            to="/areas"
            class="group rounded-2xl border border-green-200 bg-white p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-green-400 hover:shadow-xl"
          >
            <div
              class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl transition-transform duration-300 group-hover:scale-110"
            >
              🗺️
            </div>
            <h3 class="text-xl font-bold text-green-800">
              Areas
            </h3>
            <p class="mt-2 text-sm text-gray-600">
              Discover the different areas of PvZ2.
            </p>
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="group rounded-2xl border border-green-200 bg-white p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-green-400 hover:shadow-xl"
          >
            <div
              class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl transition-transform duration-300 group-hover:scale-110"
            >
              ℹ️
            </div>
            <h3 class="text-xl font-bold text-green-800">
              About
            </h3>
            <p class="mt-2 text-sm text-gray-600">
              Learn more about the Garden Guide.
            </p>
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>