<template>
  <div
    class="group w-full overflow-hidden rounded-xl border-4 border-cyan-800 bg-amber-100 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
  >
    <div
      class="m-2 flex h-44 items-center justify-center overflow-hidden rounded-md border-2 border-cyan-700 bg-gradient-to-br from-cyan-100 via-sky-100 to-blue-200"
    >
      <img
        :src="imageUrl"
        :alt="area"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>

    <div
      class="border-t-2 border-cyan-800 bg-amber-50 px-2 py-2 text-center"
    >
      <h2 class="text-lg font-bold text-cyan-950">
        {{ area }}
      </h2>
    </div>

    <div
      class="border-t-2 border-cyan-800 bg-amber-100 p-2"
    >
      <NuxtLink
        :to="`/areas/${encodeURIComponent(area)}`"
        class="block rounded-md bg-[#48CAE4] px-3 py-2 text-center text-sm font-bold text-white transition-all duration-300 hover:bg-cyan-600 hover:shadow-md"
      >
        View Details
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  area: string
}>()

const imageUrl = computed(() => {
  const imageName = props.area
    .replace(/\b\w/g, (letter) => letter.toUpperCase())

  return `https://pvz-2-api.vercel.app/assets/areas/${encodeURIComponent(imageName)}.png`
})
</script>