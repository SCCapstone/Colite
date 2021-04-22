<template>
  <div class="map">
    <!-- Page for the maps section on navbar -->
    <h1>Welcome to the map of all active parts page!</h1>
  
    <div>
    <gmap-map
    
      ref="gmap"
      :center="{ lat: 36.778259, lng: -119.417931
 }"
      :zoom="10"
      style="width:100%;  height: 100vh;"
    >
      <!-- Code for the red markers in this blow, as well as ability to toggle the attributes -->
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
    // Mounting our API so that we can pull data from MySQL DB
		axios.get('http://colitetechrestapi.us-east-1.elasticbeanstalk.com/api/poles')
		.then(response => {
			this.markers = response.data.map((transform) => {
				return {
					...transform, position: {
            // Variables to acquire the lat and longitudes of the poles
						lat: Number(transform.latitude),
						lng: Number(transform.longitude)
					}
				}
			});
    //  Fitting the marker bounds onto the map and assignign variables
			if (this.markers.length > 0) {
				this.$refs.gmap.$mapPromise.then((map) => {
					const bounds = new google.maps.LatLngBounds()
					for (let m of this.markers) {
						bounds.extend(m.position)
					}
					map.fitBounds(bounds);
					if (map.getZoom() > 12) {
						map.setZoom(12);
					}
				});
			}
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
		console.log(marker);
		var contentsHtml = '<div class="card"><div class="card-content"><div class="content pt-3">';
		var i = 0;
		for (var key in marker) {
			if (marker.hasOwnProperty(key) && typeof marker[key] !== 'object') {
				if (i % 2 == 0) {
					contentsHtml += '<p>' + key  + ': ' + marker[key] + ' | ';
				} else {
					contentsHtml += key  + ': ' + marker[key] + '</p>';
				}
				i++;
			}
		}
		contentsHtml += '</div></div></div>';
        return (contentsHtml);
      },
    }
  };
</script>


<style>
/* Styling for the map so that it fits onto the website in our color scheme */
.map {
  background-color: #2c3e50;
  /* min-height: 100%; */
  /* height: 100%; */
  height: 100vh;
}
</style>
