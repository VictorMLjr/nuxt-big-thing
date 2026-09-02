<template>
    <div class="min-h-screen bg-gradient-to-b from-slate-100 to-slate-50">
        <section
        class="bg-gradient-to-r from-[#1E2450] via-[#292F66] to-slate-700 px-6 py-16 text-center text-white"
        >
            <h1 class="text-5xl font-bold">
                Zombies
            </h1>
            <p class="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
                Explore the zombies of Plants vs. Zombies 2.
            </p>
        </section>
        <main class="mx-auto max-w-7xl px-6 py-12">
            <p
                v-if="pending"
                class="text-center text-lg font-medium text-[#1E2450]"
            >
                Loading zombies...
            </p>
            <p
                v-else-if="error"
                class="text-center text-red-600"
            >
                Error loading zombies: {{ error.message }}
            </p>
            <div
                v-else
                class="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            >
                <ZombieCard
                v-for="zombie in zombieDetails"
                :key="zombie.name"
                :zombie="zombie"
                />
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
    const {
        data: zombieNames,
        pending,
        error
    } = await useFetch<string[]>('/api/zombies')
    const zombieDetails = ref<any[]>([])

    watch(
        zombieNames,
        async (names) => {
            if (!names) return
            zombieDetails.value = await Promise.all(
            names.map((name) =>
                $fetch(`/api/zombies/${encodeURIComponent(name)}`)
        )
        )
    },
    { immediate: true }
    )
</script>