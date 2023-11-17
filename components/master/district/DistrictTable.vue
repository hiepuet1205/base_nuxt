<template>
  <table-master :headers="headers" :sort-by="sortBy" :title="title" :editedItem="editedItem" :defaultItem="defaultItem"
    :getAllItems="getAllItems" :createItem="createItem" :updateItem="updateItem" :deleteItem="deleteItem"></table-master>
</template>
    
<script>
import { getAllDistricts, createDistrict, updateDistrict, deleteDistrict } from '../../../api/district';
import TableMaster from '../TableMaster.vue';
export default ({
  name: 'DistrictTable',
  data: () => ({
    headers: [
      {
        text: 'Id',
        align: 'left',
        sortable: true,
        value: 'id',
        width: '20%'
      },
      { text: 'Province Id', value: 'provinceId', sortable: true, width: '20%' },
      { text: 'Name', value: 'name', sortable: true, width: '20%' },
      { text: 'Order Number', value: 'orderNumber', sortable: true, width: '20%' },
      { text: 'Actions', value: 'action', sortable: false, width: '20%' },
    ],
    sortBy: "name",
    title: "District",
    editedItem: {
      name: '',
      provinceId: 0,
      orderNumber: 0,
    },
    defaultItem: {
      name: '',
      provinceId: 0,
      orderNumber: 0,
    },
  }),
  components: {
    TableMaster
  },
  methods: {
    async getAllItems() {
      return await getAllDistricts();
    },
    async createItem(item) {
      return await createDistrict(item)
    },
    async updateItem(id, item) {
      return await updateDistrict(id, item);
    },
    async deleteItem(id) {
      return await deleteDistrict(id);
    }
  },
})
</script>