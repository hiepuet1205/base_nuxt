<template>
  <Base>
  <div slot="content" class="row">
    <div class="col-md-9">
      <Map :zoom="15" :center="center" :points="services" @updateLatLng="updateLatLng"></Map>
    </div>
    <div class="col-md-3">
      <v-select v-model="provinceId" :items="provinces" label="Province" color="blue" class="mt-4">
      </v-select>
      <v-select v-model="districtId" :items="districts" label="District" color="blue" class="mt-4">
      </v-select>
      <v-select v-model="wardId" :items="wards" label="Ward" color="blue" class="mt-4">
      </v-select>
      <v-btn @click="submit">Submit</v-btn>
    </div>
  </div>
  </Base>
</template>
  
<script>
import { mapState } from 'vuex';
import Base from '~/layouts/Base.vue';
import Map from '~/components/Map.vue';
import { getAllProvinces } from '~/api/province';
import { getAllDistricts } from '~/api/district';
import { getAllWards } from '~/api/ward';
export default {
  name: 'service',
  data() {
    return {
      center: [21.02825017475128, 105.79028819198643],
      services: [],
      provinces: [],
      districts: [],
      wards: [],
      provinceId: 0,
      districtId: 0,
      wardId: 0,
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
    try {
      this.provinces = await getAllProvinces(this.token).map(province => {
        return {
          text: province.name,
          value: province.id,
        }
      })
      this.districts = await getAllDistricts(this.token).map(district => {
        return {
          text: district.name,
          value: district.id,
        }
      })
      this.wards = await getAllWards(this.token).map(ward => {
        return {
          text: ward.name,
          value: ward.id,
        }
      })
    } catch (error) {
      console.error(error)
    }
  },
  mounted() {
    this.requestLocationPermission();
  },
  methods: {
    submit() {
      console.log(this.provinceId, this.districtId, this.wardId, this.center)
    },
    requestLocationPermission() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.center = [position.coords.latitude, position.coords.longitude]
          },
          (error) => {
            console.error(error.message);
          }
        );
      } else {
        console.error('Trình duyệt không hỗ trợ Geolocation.');
      }
    },
    updateLatLng(lat, lng){
      this.center = [ lat, lng ];
    }
  }
}
</script>