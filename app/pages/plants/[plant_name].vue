<template>
  <div class="min-h-screen bg-gradient-to-b from-green-50 to-white">
    <div
      v-if="pending"
      class="flex min-h-[70vh] items-center justify-center"
    >
      <p class="text-xl font-semibold text-green-700">
        Loading plant...
      </p>
    </div>
    <div
      v-else-if="error"
      class="flex min-h-[70vh] items-center justify-center"
    >
      <p class="text-xl font-semibold text-red-600">
        Error loading plant: {{ error.message }}
      </p>
    </div>
    <main
      v-else-if="plant"
      class="mx-auto max-w-6xl px-6 py-12"
    >
      <NuxtLink
        to="/plants"
        class="mb-8 inline-block font-semibold text-green-700 transition-colors duration-300 hover:text-green-900"
      >
        ← Back to Plants
      </NuxtLink>
      <section
        class="overflow-hidden rounded-3xl border-4 border-lime-900 bg-amber-50 shadow-xl"
      >
        <header
          class="bg-gradient-to-r from-green-700 via-green-600 to-lime-500 px-6 py-8 text-center text-white"
        >
          <h1 class="text-4xl font-bold capitalize sm:text-5xl">
            {{ plant.name }}
          </h1>
          <p class="mt-2 text-lg text-green-50">
            Plant Information
          </p>
        </header>
        <div class="grid gap-8 p-6 md:grid-cols-2 md:p-10">
          <div
            class="flex min-h-[400px] items-center justify-center rounded-2xl border-4 border-lime-800 bg-gradient-to-br from-green-100 via-emerald-100 to-lime-200 p-8"
          >
            <img
              :src="`https://pvz-2-api.vercel.app${plant.image}`"
              :alt="plant.name"
              class="max-h-[380px] w-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div class="flex flex-col justify-center">
            <div
              v-if="plant.description"
              class="mb-8 rounded-2xl border-2 border-green-800 bg-white p-6 shadow-md"
            >
              <h2 class="mb-3 text-2xl font-bold text-green-800">
                Description
              </h2>
              <p class="leading-7 text-gray-700">
                {{ plant.description }}
              </p>
            </div>
            <div>
              <h2 class="mb-4 text-2xl font-bold text-green-800">
                Plant Stats
              </h2>
              <div class="grid gap-3 sm:grid-cols-2">
                <div
                  v-for="stat in plantStats"
                  :key="stat.key"
                  class="rounded-xl border-2 border-lime-800 bg-amber-100 p-4"
                >
                  <p
                    class="text-sm font-bold uppercase tracking-wide text-green-800"
                  >
                    {{ stat.label }}
                  </p>
                  <p class="mt-1 text-lg font-semibold text-gray-800">
                    {{ stat.value }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const plantName = route.params.plant_name as string
const {
  data: plant,
  pending,
  error
} = await useFetch(`/api/plants/${encodeURIComponent(plantName)}`)

const plantStats = computed(() => {
  if (!plant.value) return []

  const excludedFields = [
    'name',
    'description',
    'image'
  ]

  return Object.entries(plant.value)
    .filter(([key, value]) => {
      return !excludedFields.includes(key) && value !== null && value !== undefined
    })
    .map(([key, value]) => ({
      key,
      label: key.replace(/[-_]/g, ' '),
      value
    }))
})
</script>