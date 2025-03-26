export default defineNuxtRouteMiddleware(async (to, from) => {
  const { isLoggedIn, checkAuth } = useAuth()
  
  await checkAuth()
  
  if (isLoggedIn.value) {
    return navigateTo('/dashboard')
  }
}) 