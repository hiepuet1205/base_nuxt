<template>
  <div>
    <list-item :items="items" :headers="headers" :sort-by="sortBy" :title="title" :editedItem="editedItem"
      :defaultItem="defaultItem" @open-dialog-create="openCreateDialog" @open-dialog-update="openUpdateDialog"
      @delete-item="handleDeleteItem" @reset="reset"></list-item>
    <create-dialog :dialog="isDialogCreateOpen" :item="defaultItem" @save-item="handleCreateItem"
      @close="handleCloseCreateDialog"></create-dialog>
    <update-dialog :dialog="isDialogUpdateOpen" :item="editedItem" @save-item="handleUpdateItem"
      @close="handleCloseUpdateDialog"></update-dialog>
  </div>
</template>
  
<script>
import { mapState } from 'vuex';
import { getAllDistricts, createDistrict, updateDistrict, deleteDistrict } from '../../../api/district';
import UpdateDialog from '../table/UpdateDialog.vue';
import CreateDialog from '../table/CreateDialog.vue';
import ListItem from '../table/ListItem.vue';
export default {
  data() {
    return {
      items: [],
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
      isDialogCreateOpen: false,
      isDialogUpdateOpen: false,
    }
  },
  async fetch() {
    this.items = await this.getAllItems();
  },
  components: {
    ListItem,
    UpdateDialog,
    CreateDialog
  },
  computed: {
    ...mapState({
      token: state => state.auth.token,
    })
  },
  methods: {
    async getAllItems() {
      return await getAllDistricts(this.token);
    },
    async createItem(item) {
      return await createDistrict(this.token, item)
    },
    async updateItem(id, item) {
      return await updateDistrict(this.token, id, item);
    },
    async deleteItem(id) {
      return await deleteDistrict(this.token, id);
    },
    async handleCreateItem(item) {
      const data = await this.createItem(item);
      this.editedItem = data;
      this.items.push(this.editedItem);
      this.isDialogCreateOpen = false;
    },
    async handleUpdateItem(id, item) {
      const data = await this.updateItem(id, item);
      this.editedItem = data;
      this.items[this.editedIndex] = this.editedItem;
      this.isDialogUpdateOpen = false;

    },
    async handleDeleteItem(item) {
      const index = this.items.indexOf(item)
      if (confirm('Are you sure you want to delete this item?')) {
        if (await this.deleteItem(item.id)) {
          await this.reset();
        }
      }
    },
    async reset() {
      this.items = await this.getAllItems();
    },
    async openCreateDialog() {
      this.isDialogCreateOpen = true;
      await this.reset();
    },
    async openUpdateDialog(item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = {
        id: item.id,
        name: item.name || this.defaultItem.name,
        provinceId: item.provinceId || this.defaultItem.provinceId,
        orderNumber: item.orderNumber || this.defaultItem.orderNumber,
      }
      this.isDialogUpdateOpen = true;
      await this.reset();
    },
    handleCloseCreateDialog() {
      this.isDialogCreateOpen = false;
    },
    handleCloseUpdateDialog() {
      this.isDialogUpdateOpen = false;
    }
  },
}
</script>