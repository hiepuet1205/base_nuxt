<template>
  <Base>
  <ward-table slot="content"></ward-table>
  </Base>
</template>
    
<script>
import Base from '@/layouts/Base.vue';
import WardTable from '~/components/master/ward/WardTable.vue';

export default ({
  name: "Ward",
  components: {
    Base,
    WardTable
  }
})
</script>