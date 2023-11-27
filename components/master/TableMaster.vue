<template>
  <div>
    <v-data-table :headers="headers" :items="items" sort-by="name" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn color="primary" dark class="mb-2" @click="openDialogCreate">New Item</v-btn>

          <v-dialog v-model="dialog" max-width="500px">
            <!-- <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
            </template> -->
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col v-for="(value, key) in editedItem" :key="key" cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem[key]" :label="capitalizeFirstLetter(key)"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.action="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">
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
  name: 'TableMaster',
  data() {
    return {
      dialog: false,
      items: [],
      editedIndex: -1,
    };
  },
  props: {
    headers: Array,
    sortBy: String,
    title: String,
    editedItem: Object,
    defaultItem: Object,
    getAllItems: () => { },
    createItem: () => { },
    updateItem: () => { },
    deleteItem: () => { },
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },
  async fetch() {
    this.items = await this.getAllItems();
  },
  watch: {
    dialog(val) {
      val || this.close()
    },
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    editItem(item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    async deleteItem(item) {
      const index = this.items.indexOf(item)
      if (confirm('Are you sure you want to delete this item?')) {
        this.items.splice(index, 1)
        if (await this.deleteItem(item.id)) {
          this.items.splice(index, 1)
        }
      }
    },
    close() {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    async save() {
      console.log(this.editedItem)
      if (this.editedIndex > -1) {
        const data = await this.updateItem(this.editedItem.id, this.editedItem);
        this.editedItem = data;
        this.items[this.editedIndex] = this.editedItem;
      } else {
        const data = await this.createItem(this.editedItem);
        this.editedItem = data;
        this.items[this.editedIndex] = this.editedItem;
        this.items.push(this.editedItem)
      }
      this.close()
    },

    async reset() {
      this.items = await this.getAllItems();
    },
    openDialogCreate() {
      this.dialog = true;
    }
  },
})
</script>