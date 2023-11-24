<template>
  <Base>
  <div slot="content">
    <h1>Home Page</h1>
    <router-link to="/province">
      <v-btn>
        Province
      </v-btn>
    </router-link>
    <router-link to="/district">
      <v-btn>
        District
      </v-btn>
    </router-link>
    <router-link to="/ward">
      <v-btn>
        Ward
      </v-btn>
    </router-link>
    <router-link to="/service">
      <v-btn>
        Service
      </v-btn>
    </router-link>
    <router-link to="/address">
      <v-btn>
        Address
      </v-btn>
    </router-link>
  </div>
  </Base>
</template>
  
<script>
import Base from '@/layouts/Base.vue';
export default {
  name: 'Home',
  components: {
    Base
  },
}
</script>
  