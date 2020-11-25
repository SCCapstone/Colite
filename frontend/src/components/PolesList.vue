<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by id_number"
          v-model="id_number"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchIdNumber"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Poles List</h4>
      <table class="list-group">
        <tr>
          <th>ID Number</th>
        </tr>
        <tr class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(pole, index) in poles"
          :key="index"
          @click="setActivePole(pole, index)"
        >
          <td>{{ pole.id_number }}</td>
        </tr>
      </table>


    </div>
    <div class="col-md-6">
      <div v-if="currentPole">
        <h4>Pole</h4>
        <div>
          <label><strong>ID Number:</strong></label> {{ currentPole.id_number }}
        </div>
        <div>
          <label><strong>Column 1:</strong></label> {{ currentPole.column_1 }}
        </div>
        <div>
          <label><strong>RPMs:</strong></label> {{ currentPole.rpm }}
        </div>
        <div>
          <label><strong>Wind Velocity:</strong></label> {{ currentPole.wind_v }}
        </div>
        <div>
          <label><strong>Wind Acceleration:</strong></label> {{ currentPole.wind_a }}
        </div>
        <div>
          <label><strong>Wind Acceleration 2:</strong></label> {{ currentPole.wind_a2 }}
        </div>
        <div>
          <label><strong>Wind Acceleration 3:</strong></label> {{ currentPole.wind_a3 }}
        </div>
        <div>
          <label><strong>Wind (Watts?):</strong></label> {{ currentPole.wind_w }}
        </div>
        <div>
          <label><strong>PV (Velocity?):</strong></label> {{ currentPole.pv_v }}
        </div>
        <div>
          <label><strong>PV (Acceleration?):</strong></label> {{ currentPole.pv_a }}
        </div>
        <div>
          <label><strong>Untitled:</strong></label> {{ currentPole.untitled }}
        </div>
        <div>
          <label><strong>Battery Volts</strong></label> {{ currentPole.bat_v }}
        </div>
        <div>
          <label><strong>Battery Amps</strong></label> {{ currentPole.bat_a }}
        </div>
        <div>
          <label><strong>Battery Watts</strong></label> {{ currentPole.bat_w }}
        </div>
        <div>
          <label><strong>LED 1 Volts</strong></label> {{ currentPole.led_1v }}
        </div>
        <div>
          <label><strong>LED 1 Amps</strong></label> {{ currentPole.led_1a }}
        </div>
        <div>
          <label><strong>LED 1 Watts</strong></label> {{ currentPole.led_1w }}
        </div>
        <div>
          <label><strong>LED 2 Volts</strong></label> {{ currentPole.led_2v }}
        </div>
        <div>
          <label><strong>LED 2 Amps</strong></label> {{ currentPole.led_2a }}
        </div>
        <div>
          <label><strong>LED 2 Watts</strong></label> {{ currentPole.led_2w }}
        </div>
        <div>
          <label><strong>LED 1 Volts</strong></label> {{ currentPole.led_1v }}
        </div>
        <div>
          <label><strong>Temperature (C)</strong></label> {{ currentPole.temp_c }}
        </div>
        <div>
          <label><strong>Ex in V</strong></label> {{ currentPole.ex_in_v }}
        </div>
        <div>
          <label><strong>Date (mdy)</strong></label> {{ currentPole.date_mdy }}
        </div>
        <div>
          <label><strong>Time (hms)</strong></label> {{ currentPole.time_hms }}
        </div>

        <a class="badge badge-warning"
          :href="'/poles/' + currentPole.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Pole...</p>
      </div>
    </div>
  </div>
</template>

<script>
import PoleDataService from "../services/PoleDataService";

export default {
  name: "poles-list",
  data() {
    return {
      poles: [],
      currentPole: null,
      currentIndex: -1,
      id_number: ""
    };
  },
  methods: {
    retrievePoles() {
      PoleDataService.getAll()
        .then(response => {
          this.poles = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrievePoles();
      this.currentPole = null;
      this.currentIndex = -1;
    },

    setActivePole(pole, index) {
      this.currentPole = pole;
      this.currentIndex = index;
    },

    removeAllPoles() {
      PoleDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchIdNumber() {
      PoleDataService.findByIdNumber(this.id_number)
        .then(response => {
          this.poles = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrievePoles();
  }
};
</script>

<style scoped>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
.row {
  background-color:  #2c3e50; 
}

</style>