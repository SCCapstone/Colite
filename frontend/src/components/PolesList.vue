<template>
  <div class="list row">
    <div class="col-md-8">
      <!--<div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by pole_id"
          v-model="pole_id"/>
        <div class="input-group-append">
          <<button class="btn btn-outline-secondary" type="button"
            @click="searchIdNumber"
          >
            Search
          </button>
        </div>
      </div>-->
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


    </div>
    <div class="col-md-6">
      <div v-if="currentPole">
        <h4>Pole</h4>
        <div id="idnumber">
          <label><strong>Mac Address:</strong></label> {{ currentPole.pole_id }}
        </div>
        <div>
          <label><strong>load1_time1_set:</strong></label> {{ currentPole.load1_time1_set }}
        </div>
        <div>
          <label><strong>load1_time2_set:</strong></label> {{ currentPole.load1_time2_set }}
        </div>
        <div>
          <label><strong>load1_outmode:</strong></label> {{ currentPole.load1_outmode }}
        </div>
        <div>
          <label><strong>load2_time1_set:</strong></label> {{ currentPole.load2_time1_set }}
        </div>
        <div>
          <label><strong>load2_time2_set:</strong></label> {{ currentPole.load2_time2_set }}
        </div>
        <div>
          <label><strong>load2_outmode:</strong></label> {{ currentPole.load2_outmode }}
        </div>
        <div>
          <label><strong>scale_mode:</strong></label> {{ currentPole.scale_mode }}
        </div>
        <div>
          <label><strong>param_setup_voltage:</strong></label> {{ currentPole.param_setup_voltage }}
        </div>
        <div>
          <label><strong>work_v_setup:</strong></label> {{ currentPole.work_v_setup }}
        </div>
        <div>
          <label><strong>menu_password_1:</strong></label> {{ currentPole.menu_password_1 }}
        </div>
        <div>
          <label><strong>menu_password_2</strong></label> {{ currentPole.menu_password_2 }}
        </div>
        <div>
          <label><strong>menu_password_3</strong></label> {{ currentPole.menu_password_3 }}
        </div>
        <div>
          <label><strong>max_bat_limit</strong></label> {{ currentPole.max_bat_limit }}
        </div>
        <div>
          <label><strong>over_v_comeback</strong></label> {{ currentPole.over_v_comeback }}
        </div>
        <div>
          <label><strong>low_v_comeback</strong></label> {{ currentPole.low_v_comeback }}
        </div>
        <div>
          <label><strong>low_v_limit</strong></label> {{ currentPole.low_v_limit }}
        </div>
        <div>
          <label><strong>mppt_close_v</strong></label> {{ currentPole.mppt_close_v }}
        </div>
        <div>
          <label><strong>mppt_start_v</strong></label> {{ currentPole.mppt_start_v }}
        </div>
        <div>
          <label><strong>longitude</strong></label> {{ currentPole.longitude }}
        </div>
        <div>
          <label><strong>latitude</strong></label> {{ currentPole.latitude }}
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

    redFlag(pole) {
      if (pole.ex_in_v == 3.4) {
        document.getElementById("exinv").style.color = "red";
        document.getElementById("idnumber").style.color = "red";
      }
      else{
        document.getElementById("exinv").style.color = "#95c23b";
        document.getElementById("idnumber").style.color = "#95c23b";
      }
    }
  },
  mounted() {
    this.retrievePoles();
    //this.redFlag(pole);
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