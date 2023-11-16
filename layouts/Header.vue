<template>
  <v-toolbar color="blue darken-4" dark>
    <v-toolbar-title>My App</v-toolbar-title>
    <v-spacer></v-spacer>
    <template v-if="!isAuthenticated && !isLogin">
      <router-link to="/login">
        <v-btn depressed color="blue darken-4">
          Login
        </v-btn>
      </router-link>
    </template>
    <template v-if="!isAuthenticated && !isRegister">
      <router-link to="/register">
        <v-btn depressed color="blue darken-4">
          Register
        </v-btn>
      </router-link>
    </template>
    <template v-if="isAuthenticated">
      <v-btn depressed color="blue darken-4">
        {{ user.username }}
      </v-btn>
      <v-btn depressed color="blue darken-4" @click="logout">
        Logout
      </v-btn>
    </template>
  </v-toolbar>
</template>
  
<script>
import { mapState } from 'vuex'
export default {
  name: 'Header',
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    ...mapState({
      isAuthenticated: state => state.auth.isAuthenticated,
      user: state => state.auth.user,
    }),
    isLogin() {
      return this.$route.name === 'login';
    },
    isRegister() {
      return this.$route.name === 'register';
    }
  }
}
</script>