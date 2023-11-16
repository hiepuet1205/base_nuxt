<template>
  <Base>
  <province-table slot="content"></province-table>
  </Base>
</template>

<script>
import Base from '@/layouts/Base.vue';
import ProvinceTable from '~/components/province/ProvinceTable.vue';

export default ({
  name: "Province",
  components: {
    Base,
    ProvinceTable
  }
})
</script>