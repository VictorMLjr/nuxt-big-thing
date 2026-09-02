export default defineEventHandler(async () => {
  const areas = await $fetch(
    'https://pvz-2-api.vercel.app/api/areas'
  )

  return areas
})