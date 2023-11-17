export default function ({ store, redirect, route }) {
  const isAuthenticated = store.getters['auth/getIsAuthenticated'];

  const nonAuthRoutes = ['/', '/login', '/register'];

  if (!isAuthenticated && !nonAuthRoutes.includes(route.path)) {
    store.dispatch('auth/setRedirectPath', route.fullPath);
    return redirect('/login');
  }
}