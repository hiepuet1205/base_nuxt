const apiUrl = process.env.API_AUTH || 'http://localhost:5000/';

const auth = {
  state: {
    apiUrl: apiUrl,
    user: null,
    token: null,
    isAuthenticated: false,
    redirectPath: '/'
  },
  getters: {
    getApiUrl(state) {
      return state.apiUrl
    },
    getUser(state) {
      return state.user
    },
    getToken(state) {
      return state.token
    },
    getIsAuthenticated(state) {
      return state.user !== null && state.user !== undefined;
    },
    getRedirectPath(state) {
      return state.redirectPath;
    }
  },
  mutations: {
    setApiUrl(state, payload) {
      state.apiUrl = payload
    },
    setUser(state, payload) {
      state.user = payload
    },
    setToken(state, payload) {
      state.token = payload
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload
    },
    setRedirectPath(state, payload) {
      state.redirectPath = payload
    }
  },
  actions: {
    setApiUrl(context, payload) {
      context.commit('setApiUrl', payload)
    },
    setUser(context, payload) {
      context.commit('setUser', payload)
    },
    setIsAuthenticated(context, payload) {
      context.commit('setIsAuthenticated', payload)
    },
    setRedirectPath(context, payload) {
      context.commit('setRedirectPath', payload)
    },
    async login({ commit, getters, state }, { username, password }) {
      const apiUrl = getters.getApiUrl;
      const res = await fetch(`${apiUrl}auth/login`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (data.id_token) {
        // commit('setUser', data.user);
        commit('setToken', data.id_token);
        commit('setIsAuthenticated', true);
        const redirectPath = state.redirectPath || '/';
        this.$router.push(redirectPath);
      } else {
        commit('setUser', null);
        commit('setToken', null);
        commit('setIsAuthenticated', false);
      }
    },
    async register({ commit, getters, state }, { username, password }) {
      const apiUrl = getters.getApiUrl;
      const res = await fetch(`${apiUrl}auth/register`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (data.id_token) {
        // commit('setUser', data.user);
        commit('setToken', data.id_token);
        commit('setIsAuthenticated', true);
        const redirectPath = state.redirectPath || '/';
        this.$router.push(redirectPath);
      } else {
        commit('setUser', null);
        commit('setToken', null);
        commit('setIsAuthenticated', false);
      }
    },
    logout({ commit }) {
      commit('setUser', null);
      commit('setToken', null);
      commit('setIsAuthenticated', false);
      this.$router.push({ path: "/login" })
    }
  }
}

export default auth;