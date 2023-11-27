<template>
  <div>
    <v-data-table :headers="headers" :items="items" sort-by="name" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn color="primary" dark class="mb-2" @click="openDialogCreate">New Item</v-btn>
        </v-toolbar>
      </template>
      <template v-slot:item.action="{ item }">
        <v-icon small class="mr-2" @click="openDialogUpdate(item)">
          edit
        </v-icon>
        <v-icon small @click="deleteItem(item)">
          delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="reset">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>
    
<script>
export default ({
  data() {
    return {
    };
  },
  props: {
    items: [],
    headers: Array,
    sortBy: String,
    title: String,
    editedItem: Object,
    defaultItem: Object,
  },
  methods: {
    async reset() {
      await this.$emit('reset')
    },
    openDialogCreate() {
      this.$emit('open-dialog-create');
    },
    openDialogUpdate(item) {
      this.$emit('open-dialog-update', item);
    },
    deleteItem(item) {
      this.$emit('delete-item', item);
    }
  },
})
</script>