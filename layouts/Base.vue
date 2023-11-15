<template>
  <v-app>
    <div>
      <Header></Header>
      <main>
        <slot name="content"></slot>
      </main>
      <Footer></Footer>
    </div>
  </v-app>
</template>
  
<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
export default ({
  name: 'BaseView',
  components: {
    Header,
    Footer
  }
})
</script>