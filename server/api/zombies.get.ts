export default defineEventHandler(async () => {
    const response = await $fetch(
    'https://pvz-2-api.vercel.app/api/zombies'
    )

    return response
})