export default defineNuxtRouteMiddleware((to, from) => {

    // Redirect to home if user is not authenticated
    if (to.path === '/secret') {
      return navigateTo('/')
    }

  })