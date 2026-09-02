<template>
    <div
        class="group w-full max-w-[190px] overflow-hidden rounded-xl border-4 border-[#1E2450] bg-slate-500 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
        <div
            class="m-2 flex h-44 items-center justify-center rounded-md border-2 border-slate-700 bg-gradient-to-br from-slate-500 via-slate-600 to-[#1E2450] p-3"
        >
        <img
            :src="`https://pvz-2-api.vercel.app${zombie.image}`"
            :alt="zombie.name"
            class="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
        </div>
        <div
            class="border-t-2 border-[#1E2450] bg-slate-200 px-2 py-2 text-center"
        >
            <h2
                class="text-lg font-bold capitalize text-[#1E2450]"
            >
                {{ zombie.name }}
            </h2>
        </div>
        <div
            class="border-t-2 border-[#1E2450] bg-slate-300 p-2"
        >
            <NuxtLink
                :to="`/zombies/${zombie.name.toLowerCase()}`"
                class="block rounded-md bg-[#1E2450] px-3 py-2 text-center text-sm font-bold text-white transition-all duration-300 hover:bg-[#292F66] hover:shadow-md"
            >
                View Details
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        zombie: {
            name: string
            image: string
        }
    }>()
</script>