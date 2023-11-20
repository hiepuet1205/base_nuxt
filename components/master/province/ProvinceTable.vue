<template>
  <table-master :headers="headers" :sort-by="sortBy" :title="title" :editedItem="editedItem" :defaultItem="defaultItem"
    :getAllItems="getAllItems" :createItem="createItem" :updateItem="updateItem" :deleteItem="deleteItem"></table-master>
</template>
  
<script>
import { mapState } from 'vuex';
import { getAllProvinces, createProvince, updateProvince, deleteProvince } from '../../../api/province';
import TableMaster from '../TableMaster.vue';
export default ({
  name: 'ProvinceTable',
  data: () => ({
    headers: [
      {
        text: 'Id',
        align: 'left',
        sortable: true,
        value: 'id',
        width: '25%'
      },
      { text: 'Name', value: 'name', sortable: true, width: '25%' },
      { text: 'Order Number', value: 'orderNumber', sortable: true, width: '25%' },
      { text: 'Actions', value: 'action', sortable: false, width: '25%' },
    ],
    sortBy: "name",
    title: "Province",
    editedItem: {
      name: '',
      orderNumber: 0,
    },
    defaultItem: {
      name: '',
      orderNumber: 0,
    },
  }),
  components: {
    TableMaster
  },
  computed: {
    ...mapState({
      token: state => state.auth.token,
    })
  },
  methods: {
    async getAllItems() {
      return await getAllProvinces(this.token,);
    },
    async createItem(item) {
      return await createProvince(this.token, item)
    },
    async updateItem(id, item) {
      return await updateProvince(this.token, id, item);
    },
    async deleteItem(id) {
      return await deleteProvince(this.token, id);
    }
  },
})
</script>