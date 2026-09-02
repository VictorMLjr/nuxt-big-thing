export default defineEventHandler(async (event) => {
  const plantName = getRouterParam(event, 'plant_name')

  if (!plantName) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Plant name is required'
    })
  }

  const response = await $fetch(
    `https://pvz-2-api.vercel.app/api/plants/${encodeURIComponent(plantName)}`
  )

  return response
})