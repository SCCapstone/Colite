<template>
  <div class="list row">
    <div class="col-md-8">
    <!-- This is the drop down menu of all accessed poles
          This used a v-for, which will continue to add to
           the table until no more poles remain on the api -->
    </div>
    <div class="col-md-6">
      <h4>UNIT TESTS</h4>
      <h5>Green = Pass ; Red = Fail</h5>
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
        <div id="poleid">
          <label><strong>Mac Address:</strong></label> {{ currentPole.pole_id }}
        </div>
        <div id="l1t1">
          <label><strong>Load 1, Time 1, Set:</strong></label> {{ currentPole.load1_time1_set }}
        </div>
        <div id="l1t2">
          <label><strong>Load 1, Time 2, Set:</strong></label> {{ currentPole.load1_time2_set }}
        </div>
        <div id="l1out">
          <label><strong>Load 1 Outmode:</strong></label> {{ currentPole.load1_outmode }}
        </div>
        <div id="l2t1">
          <label><strong>Load 2, Time 1, Set:</strong></label> {{ currentPole.load2_time1_set }}
        </div>
        <div id="l2t2">
          <label><strong>Load 2, Time 2, Set:</strong></label> {{ currentPole.load2_time2_set }}
        </div>
        <div id="l2out">
          <label><strong>Load 2 Outmode:</strong></label> {{ currentPole.load2_outmode }}
        </div>
        <div id="scale">
          <label><strong>Scale Mode:</strong></label> {{ currentPole.scale_mode }}
        </div>
        <div id="param">
          <label><strong>Paramater Setup Voltage:</strong></label> {{ currentPole.param_setup_volta }}
        </div>
        <div id="workv">
          <label><strong>Work Voltage Setup:</strong></label> {{ currentPole.work_v_setup }}
        </div>
        <div id="men1">
          <label><strong>Menu Password 1:</strong></label> {{ currentPole.menu_password_1 }}
        </div>
        <div id="men2">
          <label><strong>Menu Password 2:</strong></label> {{ currentPole.menu_password_2 }}
        </div>
        <div id="men3">
          <label><strong>Menu Password 3:</strong></label> {{ currentPole.menu_password_3 }}
        </div>
        <div id="maxbat">
          <label><strong>Max Battery Limit:</strong></label> {{ currentPole.max_bat_limit }}
        </div>
        <div id="overv">
          <label><strong>Over Voltage Comeback:</strong></label> {{ currentPole.over_v_comeback }}
        </div>
        <div id="lowvc">
          <label><strong>Low Voltage Comeback:</strong></label> {{ currentPole.low_v_comeback }}
        </div>
        <div id="lowvl">
          <label><strong>Low Voltage Limit:</strong></label> {{ currentPole.low_v_limit }}
        </div>
        <div id="mpptc">
          <label><strong>Close Voltage:</strong></label> {{ currentPole.mppt_close_v }}
        </div>
        <div id="mppts">
          <label ><strong>Start Voltage:</strong></label> {{ currentPole.mppt_start_v }}
        </div>
        <div id="long">
          <label ><strong>Longitude:</strong></label> {{ currentPole.longitude }}
        </div>
        <div id="lat">
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
    // IS used for unit testing, as well
    redFlag(pole) {
        if (pole.pole_id >= 0) {
        document.getElementById("poleid").style.color = "green";
      }
      else {
          document.getElementById("poleid").style.color = "red";
      }
      if (pole.load1_time1_set >= 0) {
        document.getElementById("l1t1").style.color = "green";
      }
      else {
          document.getElementById("l1t1").style.color = "red";
      }
      if (pole.load1_time2_set == "NIGHT") {
        document.getElementById("l1t2").style.color = "green";
      }
      else if (pole.load1_time2_set == "DAY") {
        document.getElementById("l1t2").style.color = "green";
      }
      else {
          document.getElementById("l1t2").style.color = "red";
      }
      if (pole.load1_outmode >= 0) {
        document.getElementById("l1out").style.color = "green";
      }
      else {
          document.getElementById("l1out").style.color = "red";
      }
      if (pole.load2_time1_set >= 0) {
        document.getElementById("l2t1").style.color = "green";
      }
      else {
          document.getElementById("l2t1").style.color = "red";
      }
      if (pole.load2_time2_set == "NIGHT") {
        document.getElementById("l2t2").style.color = "green";
      }
      else if (pole.load2_time2_set == "DAY") {
        document.getElementById("l2t2").style.color = "green";
      }
      else {
          document.getElementById("l2t2").style.color = "red";
      }
      if (pole.load2_outmode == "pv_v") {
        document.getElementById("l2out").style.color = "green";
      }
      else {
          document.getElementById("l2out").style.color = "red";
      }
      if (pole.scale_mode >= 0) {
        document.getElementById("scale").style.color = "green";
      }
      else {
          document.getElementById("scale").style.color = "red";
      }
      if (pole.param_setup_volta >= 0) {
        document.getElementById("param").style.color = "green";
      }
      else {
          document.getElementById("param").style.color = "red";
      }
      if (pole.work_v_setup >= 0) {
        document.getElementById("workv").style.color = "green";
      }
      else {
          document.getElementById("workv").style.color = "red";
      }
      if (pole.menu_password_1 >= 0) {
        document.getElementById("men1").style.color = "green";
      }
      else {
          document.getElementById("men1").style.color = "red";
      }
      if (pole.menu_password_2 >= 0) {
        document.getElementById("men2").style.color = "green";
      }
      else {
          document.getElementById("men2").style.color = "red";
      }
      if (pole.menu_password_3 >= 0) {
        document.getElementById("men3").style.color = "green";
      }
      else {
          document.getElementById("men3").style.color = "red";
      }
      if (pole.max_bat_limit >= 0) {
        document.getElementById("maxbat").style.color = "green";
      }
      else {
          document.getElementById("maxbat").style.color = "red";
      }
      if (pole.over_v_comeback >= 0) {
        document.getElementById("overv").style.color = "green";
      }
      else {
          document.getElementById("overv").style.color = "red";
      }
      if (pole.low_v_comeback >= 0) {
        document.getElementById("lowvc").style.color = "green";
      }
      else {
          document.getElementById("lowvc").style.color = "red";
      }
      if (pole.low_v_limit >= 0) {
        document.getElementById("lowvl").style.color = "green";
      }
      else {
          document.getElementById("lowvl").style.color = "red";
      }
      if (pole.mppt_close_v >= 0) {
        document.getElementById("mpptc").style.color = "green";
      }
      else {
          document.getElementById("mpptc").style.color = "red";
      }
      if (pole.mppt_start_v >= 0) {
        document.getElementById("mppts").style.color = "green";
      }
      else {
          document.getElementById("mppts").style.color = "red";
      }
      if (pole.longitude != 0) {
        document.getElementById("long").style.color = "green";
      }
      else {
          document.getElementById("long").style.color = "red";
      }
      if (pole.latitude != 0) {
        document.getElementById("lat").style.color = "green";
      }
      else {
          document.getElementById("lat").style.color = "red";
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