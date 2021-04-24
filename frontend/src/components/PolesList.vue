<template>
  <div class="list row">
    <div class="col-md-8">
    <!-- This is the drop down menu of all accessed poles
          This used a v-for, which will continue to add to
           the table until no more poles remain on the api -->
    </div>
    <div class="col-md-6">
      <h4>Poles List</h4>
      <table class="list-group">
        <tr>
          <th>Mac Address</th>
        </tr>
        <tr class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(pole, index) in poles"
          :key="index"
          @click="setActivePole(pole, index); redFlag(pole);"
        >
          <td>{{ pole.pole_id }}</td>
        </tr>
      </table>

    <!-- this is the information displayed when you click on a mac address -->
    </div>
    <div class="col-md-6">
      <div v-if="currentPole">
        <h4>Pole</h4>
        <div id="idnumber">
          <label><strong>Mac Address:</strong></label> {{ currentPole.pole_id }}
        </div>
        <div>
          <label><strong>Load 1, Time 1, Set:</strong></label> {{ currentPole.load1_time1_set }}
        </div>
        <div>
          <label><strong>Load 1, Time 2, Set:</strong></label> {{ currentPole.load1_time2_set }}
        </div>
        <div>
          <label><strong>Load 1 Outmode:</strong></label> {{ currentPole.load1_outmode }}
        </div>
        <div>
          <label><strong>Load 2, Time 1, Set:</strong></label> {{ currentPole.load2_time1_set }}
        </div>
        <div>
          <label><strong>Load 2, Time 2, Set:</strong></label> {{ currentPole.load2_time2_set }}
        </div>
        <div>
          <label><strong>Load 2 Outmode:</strong></label> {{ currentPole.load2_outmode }}
        </div>
        <div>
          <label><strong>Scale Mode:</strong></label> {{ currentPole.scale_mode }}
        </div>
        <div>
          <label><strong>Paramater Setup Voltage:</strong></label> {{ currentPole.param_setup_volta }}
        </div>
        <div>
          <label><strong>Work Voltage Setup:</strong></label> {{ currentPole.work_v_setup }}
        </div>
        <div>
          <label><strong>Menu Password 1:</strong></label> {{ currentPole.menu_password_1 }}
        </div>
        <div>
          <label><strong>Menu Password 2:</strong></label> {{ currentPole.menu_password_2 }}
        </div>
        <div>
          <label><strong>Menu Password 3:</strong></label> {{ currentPole.menu_password_3 }}
        </div>
        <div id="maxbat">
          <label><strong>Max Battery Limit:</strong></label> {{ currentPole.max_bat_limit }}
        </div>
        <div>
          <label><strong>Over Voltage Comeback:</strong></label> {{ currentPole.over_v_comeback }}
        </div>
        <div>
          <label><strong>Low Voltage Comeback:</strong></label> {{ currentPole.low_v_comeback }}
        </div>
        <div>
          <label><strong>Low Voltage Limit:</strong></label> {{ currentPole.low_v_limit }}
        </div>
        <div>
          <label><strong>Close Voltage:</strong></label> {{ currentPole.mppt_close_v }}
        </div>
        <div>
          <label><strong>Start Voltage:</strong></label> {{ currentPole.mppt_start_v }}
        </div>
        <div>
          <label><strong>Longitude:</strong></label> {{ currentPole.longitude }}
        </div>
        <div>
          <label><strong>Latitude:</strong></label> {{ currentPole.latitude }}
        </div>

        <!--<a class="badge badge-warning"
          :href="'/poles/' + currentPole.id"
        >
          Edit
        </a>-->
      </div>
      <div v-else>
        <br />
        <p>Please click on a Pole...</p>
      </div>
    </div>
  </div>
</template>


<script>
// This imports the poleDataService and has the functions that can be used on this page
import PoleDataService from "../services/PoleDataService";

export default {
  name: "poles-list",
  data() {
    return {
      poles: [],
      currentPole: null,
      currentIndex: -1,
      pole_id: ""
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
      PoleDataService.findByIdNumber(this.pole_id)
        .then(response => {
          this.poles = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    // basic red flag functionality, if something meets a criteria, it marks it red
    redFlag(pole) {
      if (pole.max_bat_limit > 10) {
        document.getElementById("maxbat").style.color = "red";
        document.getElementById("idnumber").style.color = "red";
      }
    }
  },
  mounted() {
    this.retrievePoles();
    //this.redFlag(pole);
  }
}
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