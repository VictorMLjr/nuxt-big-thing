<template>
  <div class="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
    <!-- Hero -->
    <section
      class="bg-gradient-to-r from-[#48CAE4] via-cyan-500 to-sky-500 px-6 py-16 text-center text-white"
    >
      <h1 class="text-4xl font-bold capitalize sm:text-5xl">
        {{ area.name }}
      </h1>

      <p class="mx-auto mt-3 max-w-2xl text-lg text-cyan-50">
        Explore this Plants vs. Zombies 2 area.
      </p>
    </section>

    <main class="mx-auto max-w-5xl px-6 py-12">
      <!-- Image -->
      <div
        class="overflow-hidden rounded-2xl border-4 border-cyan-800 bg-white shadow-xl"
      >
        <img
          :src="imageUrl"
          :alt="area.name"
          class="h-72 w-full object-cover sm:h-96"
        />
      </div>

      <!-- Information -->
      <section
        class="mt-8 rounded-2xl border-4 border-cyan-800 bg-amber-50 p-6 shadow-lg"
      >
        <h2 class="text-2xl font-bold text-cyan-950">
          Area Information
        </h2>

        <div class="mt-6 grid gap-4 sm:grid-cols-2">
          <div
            class="rounded-xl bg-white p-5 shadow-sm"
          >
            <p class="text-sm font-semibold uppercase tracking-wide text-cyan-600">
              Area
            </p>

            <p class="mt-1 text-xl font-bold capitalize text-cyan-950">
              {{ area.name }}
            </p>
          </div>

          <div
            class="rounded-xl bg-white p-5 shadow-sm"
          >
            <p class="text-sm font-semibold uppercase tracking-wide text-cyan-600">
              Levels
            </p>

            <p class="mt-1 text-xl font-bold text-cyan-950">
              {{ area.levels }}
            </p>
          </div>

          <div
            class="rounded-xl bg-white p-5 shadow-sm"
          >
            <p class="text-sm font-semibold uppercase tracking-wide text-cyan-600">
              Difficulty
            </p>

            <p class="mt-1 text-xl font-bold text-cyan-950">
              {{ area.difficulty }}
            </p>
          </div>
        </div>
      </section>

      <!-- Back button -->
      <div class="mt-8 text-center">
        <NuxtLink
          to="/areas"
          class="inline-block rounded-lg bg-[#48CAE4] px-6 py-3 font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-600 hover:shadow-lg"
        >
          ← Back to Areas
        </NuxtLink>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const areaData: Record<
  string,
  {
    name: string
    levels: number
    difficulty: number
    image: string
  }
> = {
  "player's house": {
    name: "Player's House",
    levels: 5,
    difficulty: 0,
    image: "/assets/areas/Player's House.png"
  },

  "ancient egypt": {
    name: "Ancient Egypt",
    levels: 25,
    difficulty: 1,
    image: "/assets/areas/Ancient Egypt.png"
  },

  "pirate seas": {
    name: "Pirate Seas",
    levels: 25,
    difficulty: 2,
    image: "/assets/areas/Pirate Seas.png"
  },

  "wild west": {
    name: "Wild West",
    levels: 25,
    difficulty: 2,
    image: "/assets/areas/Wild West.png"
  },

  "frostbite caves": {
    name: "Frostbite Caves",
    levels: 30,
    difficulty: 3,
    image: "/assets/areas/Frostbite Caves.png"
  },

  "lost city": {
    name: "Lost City",
    levels: 32,
    difficulty: 3,
    image: "/assets/areas/Lost City.png"
  },

  "far future": {
    name: "Far Future",
    levels: 25,
    difficulty: 3,
    image: "/assets/areas/Far Future.png"
  },

  "dark ages": {
    name: "Dark Ages",
    levels: 20,
    difficulty: 3,
    image: "/assets/areas/Dark Ages.png"
  },

  "neon mixtape tour": {
    name: "Neon Mixtape Tour",
    levels: 32,
    difficulty: 4,
    image: "/assets/areas/Neon Mixtape Tour.png"
  },

  "jurassic marsh": {
    name: "Jurassic Marsh",
    levels: 32,
    difficulty: 4,
    image: "/assets/areas/Jurassic Marsh.png"
  },

  "big wave beach": {
    name: "Big Wave Beach",
    levels: 32,
    difficulty: 4,
    image: "/assets/areas/Big Wave Beach.png"
  },

  "modern day": {
    name: "Modern Day",
    levels: 34,
    difficulty: 4,
    image: "/assets/areas/Modern Day.png"
  }
}

const areaKey = computed(() => {
  return decodeURIComponent(String(route.params.area_name)).toLowerCase()
})

const area = computed(() => {
  return (
    areaData[areaKey.value] ?? {
      name: "Unknown Area",
      levels: 0,
      difficulty: 0,
      image: ""
    }
  )
})

const imageUrl = computed(() => {
  return `https://pvz-2-api.vercel.app${area.value.image}`
})
</script>