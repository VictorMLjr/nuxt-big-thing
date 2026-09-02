<template>
  <div class="min-h-screen bg-gradient-to-b from-green-50 to-white">
    <section
      class="bg-gradient-to-r from-green-700 via-green-600 to-lime-500 px-6 py-16 text-center text-white"
    >
      <h1 class="text-5xl font-bold">
        Plants
      </h1>

      <p class="mx-auto mt-4 max-w-2xl text-lg">
        Explore all the plants in Plants vs. Zombies 2.
      </p>
    </section>
    <main class="mx-auto max-w-7xl px-6 py-12">
      <p
        v-if="pending"
        class="text-center text-lg font-medium text-green-700"
      >
        Loading plants...
      </p>
      <p
        v-else-if="error"
        class="text-center text-red-600"
      >
        Error loading plants: {{ error.message }}
      </p>
      <div
        v-else
        class="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        <PlantCard
          v-for="plant in plantDetails"
          :key="plant.name"
          :plant="plant"
        />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">

const {
  data: plantNames,
  pending,
  error
} = await useFetch<string[]>('/api/plants')

const plantDetails = ref<any[]>([])

watch(
  plantNames,
  async (names) => {
    if (!names) return

    plantDetails.value = await Promise.all(
      names.map((name) =>
        $fetch(`/api/plants/${encodeURIComponent(name)}`)
      )
    )
  },
  { immediate: true }
)
</script>