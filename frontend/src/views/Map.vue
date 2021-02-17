<template>
  <div class="map">
    <h1>Welcome to the map of all active parts page!</h1>

    <div>
      <gmap-map
        ref="gmap"
        :center="{ lat: 36.778259, lng: -119.417931 }"
        :zoom="10"
        style="width: 100%; height: 100vh"
      >
        <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          @click="toggleInfoWindow(m, index)"
        >
        </gmap-marker>

        <gmap-info-window
          :options="infoOptions"
          :position="infoWindowPos"
          :opened="infoWinOpen"
          @closeclick="infoWinOpen = false"
        >
          <div v-html="infoContent"></div>
        </gmap-info-window>
      </gmap-map>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import XLSX from "xlsx";
import transformSheets from "./readXlx.js";
import { locations } from "./data.js";

const dataObj = {
  lat: 6.465422,
  lng: 3.406448,
};
export default {
  name: "GoogleMap",
  data() {
    console.log("data");

    return {
      content: "",
      err: "lOjhsh",
      center: { lat: dataObj.lat, lng: dataObj.lng },
      map: null,
      infoContent: "",
      infoWindowPos: {
        lat: 0,
        lng: 0,
      },
      infoWinOpen: false,
      currentMidx: null,
      //optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
      markers: "",
    };
  },
  mounted() {
    console.log(this.markers);

    this.$refs.gmap.$mapPromise.then((map) => {
      const bounds = new google.maps.LatLngBounds();
      for (let m of this.markers) {
        console.log(m);
        bounds.extend(m.position);
      }
      map.fitBounds(bounds);
    });
  },

  created() {
    var url = "http://localhost:8080/api/map"; // Files placed in the public directory can be accessed directly

    axios
      .get(url, { responseType: "json" })
      .then((res) => {
        console.log(res);
        // var data = new Uint8Array(res.data);
        // var wb = XLSX.read(data, { type: "array" });
        // var sheets = wb.SheetNames[0];
        // let worksheet = wb.Sheets[sheets];
        this.markers = res.data.map((transform) => {
          return {
            ...transform,
            position: {
              lat: Number(transform.LATITUDE),
              lng: Number(transform.LONGITUDE),
            },
          };
        });
        this.$refs.gmap.$mapPromise.then((map) => {
          const bounds = new google.maps.LatLngBounds();
          for (let m of this.markers) {
            bounds.extend(m.position);
          }
          map.fitBounds(bounds);
        });
      })
      .catch((err) => {
        this.err = err;
      });
  },

  methods: {
    toggleInfoWindow: function (marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoContent = this.getInfoWindowContent(marker);

      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },

    getInfoWindowContent: function (marker) {
      return `<div class="card">
  
  <div class="card-content">
    
    <div class="content pt-3">
      <p>Latitude : ${marker.position.lat} <p />
     <p>Longitude: ${marker.position.lng} </p>
      <p class="">Rmp : ${marker.RPM}</p>
      <p class="">Date : ${marker.Date}</p>


     
      
    </div>
  </div>
</div>`;
    },
  },
};
</script>

<style>
.map {
  background-color: #2c3e50;
  /* min-height: 100%; */
  /* height: 100%; */
  height: 100vh;
}
</style>
