<template>
  <Base>
  <div slot="content" class="row">
    <div class="col-md-9">
      <Map :zoom="15" :center="center" :points="services"></Map>
    </div>
    <div class="col-md-3">
      <v-select v-model="maxDistance" :items="distances" label="Distance" color="blue" class="mt-4">
      </v-select>
      <v-btn @click="search">Search</v-btn>
    </div>
  </div>
  </Base>
</template>

<script>
import { mapState } from 'vuex';
import Base from '~/layouts/Base.vue';
import Map from '~/components/Map.vue';
import { getConsumerAddressInfo, getServices } from '~/api/consumer';
export default {
  name: 'service',
  data() {
    return {
      maxDistance: 10,
      distances: [
        {
          text: '10 Km',
          value: 10
        },
        {
          text: '20 Km',
          value: 20
        },
        {
          text: '30 Km',
          value: 30
        }
      ],
      center: [],
      services: [],
    }
  },
  components: {
    Base,
    Map
  },
  computed: {
    ...mapState({
      token: state => state.auth.token,
    })
  },
  async fetch() {
    const data = await getConsumerAddressInfo(this.token);
    this.center.push(data.lat);
    this.center.push(data.lng);
    this.services = await getServices(this.token, this.maxDistance);
  },
  methods: {
    async search() {
      this.services = await getServices(this.token, this.maxDistance);
    }
  }
}
</script>