export default defineEventHandler(async (event) => {
    const zombieName = getRouterParam(event, 'zombie_name')

    if (!zombieName) {
        throw createError({
        statusCode: 400,
        statusMessage: 'Zombie name is required'
        })
    }

    const response = await $fetch(
        `https://pvz-2-api.vercel.app/api/zombies/${encodeURIComponent(zombieName)}`
    )

    return response
})