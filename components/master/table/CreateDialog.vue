<template>
  <v-dialog v-model="dialog" max-width="500px" @click:outside="handleClose">
    <v-card>
      <v-card-title>
        <span class="headline">Create item</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col v-for="(value, key) in item" :key="key" cols="12" sm="6" md="4">
              <v-text-field v-model="item[key]" :label="capitalizeFirstLetter(key)"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="handleClose">Cancel</v-btn>
        <v-btn color="blue darken-1" text @click="handleSave">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  props: {
    dialog: Boolean,
    item: Object,
    save: () => {}
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    async handleSave() {
      await this.$emit('save-item', this.item);
    },
    handleClose() {
      this.$emit('close');
    }
  }
}
</script>