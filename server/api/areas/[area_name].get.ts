export default defineEventHandler(async (event) => {
    const areaName = getRouterParam(event, 'area_name')

    if (!areaName) {
        throw createError({
        statusCode: 400,
        statusMessage: 'Area name is required'
        })
    }

    const response = await $fetch(
        `https://pvz-2-api.vercel.app/api/areas/${encodeURIComponent(areaName)}`
    )

    return response
})