<template>
    <div>
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
            @click="setActivePole(pole, index); redFlag(pole);"
            >
            <td>{{ pole.id_number }}</td>
            </tr>
        </table>
        </div>

        <div>
            <table>
                <tr>
                    <th> RetrievePoles() Test:</th>
                </tr>
                <tr id="retrieve" class="retrieve"> {{ this.test_result }} </tr>
                <tr> {{ this.currentPole.id_number}} </tr>
                <tr> {{ this.currentIndex }} </tr>
                <tr>
                    <button onclick="retrievePolesTest()">Test Current Pole</button>
                </tr>
            </table>
        </div>

    </div>
</template>



<script>
import PoleDataService from "../../src/services/PoleDataService.js";

export default {
  name: "poles-list",
  data() {
    return {
      poles: [],
      currentPole: null,
      currentIndex: -1,
      id_number: "",
      test_result: "Failed"
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
    retrievePolesTest() {
        if(currentPole.id_number == currentIndex + 1) {
            this.test_result = "Passed";
        }
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
