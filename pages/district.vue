<template>
  <Base>
  <district-table slot="content"></district-table>
  </Base>
</template>
  
<script>
import Base from '@/layouts/Base.vue';
import DistrictTable from '~/components/master/district/DistrictTable.vue';

export default ({
  name: "Province",
  components: {
    Base,
    DistrictTable
  }
})
</script>