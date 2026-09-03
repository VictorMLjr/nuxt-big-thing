<script setup>
    const links = [
        { name: 'Home', path: '/' },
        { name: 'Plants', path: '/plants' },
        { name: 'Zombies', path: '/zombies' },
        { name: 'Areas', path: '/areas' },
        { name: 'About', path: '/about' }
    ]
</script>

<template>
    <nav class="bg-gradient-to-r from-yellow-500 via-yellow-400 to-amber-500 text-white shadow-lg">
        <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <div class="flex items-center gap-3">
                <img
                    src="/PvZ2.webp"
                    alt="PvZ2"
                    class="w-12 h-12 object-contain"
                />

                <NuxtLink
                    to="/"
                    class="text-2xl font-bold transition-transform duration-300 hover:scale-105"
                >
                    PvZ2 Almanac
                </NuxtLink>
            </div>
            <div class="flex items-center gap-6">
                <NuxtLink
                    v-for="link in links"
                    :key="link.path"
                    :to="link.path"
                    class="transition-colors duration-300 hover:text-yellow-300"
                >
                    {{ link.name }}
                </NuxtLink>
            </div>
        </div>
    </nav>
</template>