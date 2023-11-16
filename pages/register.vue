<template>
  <Base>
  <RegisterForm slot="content"></RegisterForm>
  </Base>
</template>
    
<script>
import Base from '@/layouts/Base.vue';
import RegisterForm from '~/components/register/RegisterForm.vue';

export default ({
  name: "Register",
  components: {
    Base,
    RegisterForm
  }
})
</script>