<template>
  <div class="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
    <section
      class="bg-gradient-to-r from-[#48CAE4] via-cyan-500 to-sky-500 px-6 py-16 text-center text-white"
    >
      <h1 class="text-5xl font-bold">
        Areas
      </h1>

      <p class="mx-auto mt-4 max-w-2xl text-lg text-cyan-50">
        Explore the different areas of Plants vs. Zombies 2.
      </p>
    </section>

    <main class="mx-auto max-w-7xl px-6 py-12">
      <p
        v-if="pending"
        class="text-center text-lg font-medium text-cyan-700"
      >
        Loading areas...
      </p>

      <p
        v-else-if="error"
        class="text-center text-red-600"
      >
        Error loading areas: {{ error.message }}
      </p>

      <div
        v-else
        class="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        <AreaCard
          v-for="area in areaNames"
          :key="area"
          :area="area"
        />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const {
  data: areaNames,
  pending,
  error
} = await useFetch<string[]>('/api/areas')
</script>