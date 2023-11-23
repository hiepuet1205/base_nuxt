export default function ({ store, redirect, route }) {
  const isAuthenticated = store.getters['auth/getIsAuthenticated'];

  const nonAuthRoutes = ['/', '/login', '/register', '/service'];

  if (!isAuthenticated && !nonAuthRoutes.includes(route.path)) {
    store.dispatch('setRedirectPath', route.fullPath);
    return redirect('/login');
  }
}