<template>
  <Base>
    <login-form slot="content"></login-form>
  </Base>
</template>
  
<script>
import LoginForm from '~/components/login/LoginForm.vue';
import Base from '@/layouts/Base.vue';

export default ({
  name: "Login",
  components: {
    Base,
    LoginForm
  }
})
</script>