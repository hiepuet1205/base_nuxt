<template>
  <table-master :headers="headers" :sort-by="sortBy" :title="title" :editedItem="editedItem" :defaultItem="defaultItem"
    :getAllItems="getAllItems" :createItem="createItem" :updateItem="updateItem" :deleteItem="deleteItem"></table-master>
</template>
        
<script>
import { getAllWards, createWard, updateWard, deleteWard } from '../../../api/ward'
import TableMaster from '../TableMaster.vue';
export default ({
  name: 'WardTable',
  data: () => ({
    headers: [
      {
        text: 'Id',
        align: 'left',
        sortable: true,
        value: 'id',
        width: '17%'
      },
      { text: 'Province Id', value: 'provinceId', sortable: true, width: '17%' },
      { text: 'District Id', value: 'districtId', sortable: true, width: '17%' },
      { text: 'Name', value: 'name', sortable: true, width: '17%' },
      { text: 'Order Number', value: 'orderNumber', sortable: true, width: '17%' },
      { text: 'Actions', value: 'action', sortable: false, width: '15%' },
    ],
    sortBy: "name",
    title: "Ward",
    editedItem: {
      name: '',
      provinceId: 0,
      districtId: 0,
      orderNumber: 0,
    },
    defaultItem: {
      name: '',
      provinceId: 0,
      districtId: 0,
      orderNumber: 0,
    },
  }),
  components: {
    TableMaster
  },
  methods: {
    async getAllItems() {
      return await getAllWards();
    },
    async createItem(item) {
      return await createWard(item)
    },
    async updateItem(id, item) {
      return await updateWard(id, item);
    },
    async deleteItem(id) {
      return await deleteWard(id);
    }
  },
})
</script>