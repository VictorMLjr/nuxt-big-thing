<template>
  <div
    class="group w-full max-w-[190px] overflow-hidden rounded-xl border-4 border-lime-900 bg-amber-100 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
  >
    <div
      class="m-2 flex h-44 items-center justify-center rounded-md border-2 border-lime-800 bg-gradient-to-br from-green-100 via-emerald-100 to-lime-200 p-3"
    >
      <img
        :src="`https://pvz-2-api.vercel.app${plant.image}`"
        :alt="plant.name"
        class="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div
      class="border-t-2 border-lime-900 bg-amber-50 px-2 py-2 text-center"
    >
      <h2
        class="text-lg font-bold capitalize text-lime-950"
      >
        {{ plant.name }}
      </h2>
    </div>
    <div class="border-t-2 border-lime-900 bg-amber-100 p-2">
      <NuxtLink
        :to="`/plants/${plant.name.toLowerCase()}`"
        class="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-bold text-white transition-all duration-300 hover:bg-green-700 hover:shadow-md"
      >
        View Details
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  plant: {
    name: string
    image: string
  }
}>()
</script>