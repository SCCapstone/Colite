<template>
  <div class="dataVis">
    
      <h1 class="card-title">Welcome to the Colite Technology Data Visualization Application!</h1>
      <b-jumbotron> 
        <div >

        <!--           
        <button v-on:click="renderChart">Update</button>
        <button v-on:click="rand">Randomize Data</button> -->

        </div>

      </b-jumbotron> 
      <div class="small">
        <!-- <line-chart 
        :class ="{active: index == currentIndex}"
        v-for="(pole, index) in poles"
        :key="index"
        :chartdata="pole.pole_id" 
        :options="currentPole.pole_id"/> -->
        <line-chart :key="chartKey" 
        :chartdata="dataLine" 
        :options="options"></line-chart>
        <!-- Says that pole is not defined need to get to the botom of this-->
      </div>
    </div>
</template>

<script>
import LineChart from '../components/ChartsGraphData.vue'
import PoleDataService from "../services/PoleDataService";

export default {
  name: 'LineChartContainer',
  components: { LineChart },
  data: () => {
    return {
        // loaded: false,
        // chartdata: null,
        chartKey: 0,
        dataLine: 0,
        // poles: [],
        // currentPoll: null,
        // currentIndex: -1,
        // pole_id: "",
        options: null,
        // index: 0
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

    renderChart: function() {
      this.chartKey+=1;
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
    this.renderChart();
    this.chartdata = pole_id;
    this.loaded = true;
  },
   methods: {
    renderChart: function() {
      this.chartKey+=1;
    },
    rand: function() {
      this.renderChart();
      this.dataLine = LineChart.methods.randomizeData();
      this.options = {
        responsive: true,
        maintainAspectRatio: false
      
      };
    },
  }
};
</script>