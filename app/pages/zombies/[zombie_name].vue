<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-100 to-white">
    <div
      v-if="pending"
      class="flex min-h-[70vh] items-center justify-center"
    >
      <p class="text-xl font-semibold text-[#1E2450]">
        Loading zombie...
      </p>
    </div>
    <div
      v-else-if="error"
      class="flex min-h-[70vh] items-center justify-center"
    >
      <p class="text-xl font-semibold text-red-600">
        Error loading zombie: {{ error.message }}
      </p>
    </div>
    <main
      v-else-if="zombie"
      class="mx-auto max-w-6xl px-6 py-12"
    >
      <NuxtLink
        to="/zombies"
        class="mb-8 inline-block font-semibold text-[#1E2450] transition-colors duration-300 hover:text-slate-700"
      >
        ← Back to Zombies
      </NuxtLink>
      <section
        class="overflow-hidden rounded-3xl border-4 border-[#1E2450] bg-slate-200 shadow-xl"
      >
        <header
          class="bg-gradient-to-r from-[#1E2450] via-[#292F66] to-slate-700 px-6 py-8 text-center text-white"
        >
          <h1 class="text-4xl font-bold capitalize sm:text-5xl">
            {{ zombie.name }}
          </h1>
          <p class="mt-2 text-lg text-slate-200">
            Zombie Information
          </p>
        </header>
        <div class="grid gap-8 p-6 md:grid-cols-2 md:p-10">
          <div
            class="flex min-h-[400px] items-center justify-center rounded-2xl border-4 border-slate-700 bg-gradient-to-br from-slate-500 via-slate-600 to-[#1E2450] p-8"
          >
            <img
              :src="`https://pvz-2-api.vercel.app${zombie.image}`"
              :alt="zombie.name"
              class="max-h-[380px] w-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div class="flex flex-col justify-center">
            <div
              v-if="zombie.description"
              class="mb-8 rounded-2xl border-2 border-[#1E2450] bg-white p-6 shadow-md"
            >
              <h2 class="mb-3 text-2xl font-bold text-[#1E2450]">
                Description
              </h2>
              <p class="leading-7 text-gray-700">
                {{ zombie.description }}
              </p>
            </div>
            <div>
              <h2 class="mb-4 text-2xl font-bold text-[#1E2450]">
                Zombie Stats
              </h2>
              <div class="grid gap-3 sm:grid-cols-2">
                <div
                  v-for="stat in zombieStats"
                  :key="stat.key"
                  class="rounded-xl border-2 border-[#1E2450] bg-slate-300 p-4"
                >
                  <p
                    class="text-sm font-bold uppercase tracking-wide text-[#1E2450]"
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

const zombieName = route.params.zombie_name as string

const {
  data: zombie,
  pending,
  error
} = await useFetch(
  `/api/zombies/${encodeURIComponent(zombieName)}`
)

const zombieStats = computed(() => {
  if (!zombie.value) return []

  const excludedFields = [
    'name',
    'description',
    'image'
  ]

  return Object.entries(zombie.value)
    .filter(([key, value]) => {
      return (
        !excludedFields.includes(key) &&
        value !== null &&
        value !== undefined
      )
    })
    .map(([key, value]) => ({
      key,
      label: key.replace(/[-_]/g, ' '),
      value
    }))
})
</script>