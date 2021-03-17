<template>
  <div class="map">
    <h1>Welcome to the map of all active parts page!</h1>
  
    <div>
    <gmap-map
      ref="gmap"
      :center="{ lat: 36.778259, lng: -119.417931
 }"
      :zoom="10"
      style="width:100%;  height: 100vh;"
    >
      
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="toggleInfoWindow(m,index)">
      </gmap-marker>

      <gmap-info-window
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
        @closeclick="infoWinOpen=false"
      >
        <div v-html="infoContent"></div>
      </gmap-info-window>

    </gmap-map>
	</div>
  </div>
</template>

<script>
import axios from 'axios'
  const dataObj = {
    lat: 39,
    lng: -93
  };
  export default {
    name: "GoogleMap",
    data() {
      return {
        center: {lat: dataObj.lat, lng: dataObj.lng},
		infoContent: '',                                                                                               
		infoWindowPos: {
          lat: 0,
          lng: 0
        },
        infoWinOpen: false,
        //optional: offset infowindow so it visually sits nicely on top of our marker
        infoOptions: {
          pixelOffset: {
            width: 0,
            height: -35
          }
        },
        markers: []
      };
    },
    
	mounted() {
		axios.get('http://colitetechrestapi.us-east-1.elasticbeanstalk.com/api/poles')
		.then(response => {
			this.markers = response.data.map((transform) => {
				return {
					...transform, position: {
						lat: Number(transform.latitude),
						lng: Number(transform.longitude)
					}
				}
			});
     
			this.$refs.gmap.$mapPromise.then((map) => {
				const bounds = new google.maps.LatLngBounds()
				for (let m of this.markers) {
				  bounds.extend(m.position)
				}
				map.fitBounds(bounds);
			});
		}).catch( err => {
			this.err = err
		})
	},
    methods: {
      toggleInfoWindow: function (marker, idx) {
        
        this.infoWindowPos = marker.position
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
        return (`<div class="card">
  
  <div class="card-content">
    
    <div class="content pt-3">
		<p>Latitude : ${marker.position.lat} <p />
		<p>Longitude: ${marker.position.lng} </p>
		<p class="">Rmp : ${marker.rpm}</p>
		<p class="">Wind : v:${marker.wind_v} a:${marker.wind_a} a2:${marker.wind_a2} a3:${marker.wind_a3} w:${marker.wind_w}</p>
		<p class="">Led : 1v:${marker.led_1v} 1a:${marker.led_1a} 1w:${marker.led_1w} 2v:${marker.led_2v} 2a:${marker.led_2a} 2w:${marker.led_2w}</p>
		<p class="">Date : ${marker.date_mdy}</p>
		<p class="">Time : ${marker.time_hms}</p>
    </div>
  </div>
</div>`);
      },
    }
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
