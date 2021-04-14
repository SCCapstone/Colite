<template>
  <div class="dataVis">
    
      <h1 class="card-title">Welcome to the Colite Technology Data Visualization Application!</h1>
      <b-jumbotron> 
        <div >
        <button v-on:click="renderChart">Update</button>
        <button v-on:click="rand">Randomize Data</button>
        </div>

      </b-jumbotron> 
      <div class="small">
        <!-- <line-chart 
        :class ="{active: index == currentIndex}"
        v-for="(pole, index) in poles"
        :key="index"
        :chartdata="pole.pole_id" 
        :options="currentPole.pole_id"/> -->
        <!-- <line-chart :key="chartKey" 
        :chartdata="dataLine" 
        :options="options"></line-chart> -->
        

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
import http from "../http-common";

export default {
  name: 'LineChartContainer',
  components: { LineChart },
  data: () => {
    return {
        // loaded: false,
        // chartdata: null,
        chartKey: 0,
        dataLine: null,
        poles: [],
        currentPoll: null,
        currentIndex: -1,
        pole_id: "",
        options: null,
        index: 0
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
    },
    /*renderChart: function() {
      this.chartKey+=1;
    },*/

    rand: function() {
      this.renderChart();
      this.dataLine = LineChart.methods.randomizeData();
      this.options = {
        responsive: true,
        maintainAspectRatio: false
      
      };
    },

    getAll() {
        return http.get("/poles");
    },

    get(id) {
        return http.get(`/poles/${id}`);
    },

    create(data) {
        return http.post("/poles", data);
    },

    update(id, data) {
        return http.put(`/poles/${id}`, data);
    },

    delete(id) {
        return http.delete(`/poles/${id}`);
    },

    deleteAll() {
        return http.delete(`/poles`);
    },

    findByTitle(title) {
        return http.get(`/poles?title=${title}`);
    }
  },

  async mounted() {
    this.retrievePoles();
    //this.redFlag(pole);
    this.renderChart();
    const { pollList } = await fetch ('/api/poles')
    this.chartdata = pollList;
    // this.rand();
    // this.loaded = true;
    // config = require("../nodejs-express-sequelize-mysql/app/config/db.config.js");
    // db = config.database;
    // var connection=mysql.createConnection({user: "admin", password: "ColiteTech!", 
    //     DB: "rc1", dialect: "mysql", 
    //     pool: {
    //         max: 5,
    //         min: 0,
    //         acquire: 30000,
    //         idle: 10000
    //     }    
    // })
  },
};
</script>