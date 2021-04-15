
<template>
	
    <div class="dataVis">
    
      <h1 class="card-title">Welcome to the Colite Technology Data Visualization Application!</h1>
      <div class="col-md-6" style="width: 20%; float:left">
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

      <div class="small" style="width: 80%; float:right">
        <line-chart :key="chartKey" 
        :chartdata="dataLine" 
        :options="options"></line-chart>

      </div>

        <div style="margin: auto">

          
          <button v-on:click="renderChart">Update</button>
          <button v-on:click="renderSelected">Render Selected Pole</button>

        </div>

    </div>

</template>

<script>
import PoleDataService from "../services/PoleDataService";
import LineChart from '../components/PlotlyGraphs'

export default({
  components: {
    LineChart
  },
  data() {
    return {
      chartKey: 0,
      dataLine: null,
      options: null,
      poles: [],
      currentPole: null,
      currentIndex: -1,
      pole_id: ""
    };
  },
 
  methods: {
    //methods for chart
    renderChart: function() {
      this.chartKey+=1;
    },
    renderSelected: function() {
      this.renderChart();
      this.dataLine = LineChart.methods.renderSelectedData(currentPole.over_v_comeback);
      this.options = {
        responsive: true,
        maintainAspectRatio: false
      
      };
    },
    //methods for pole list
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
  mounted () {
    this.retrievePoles();
  }
});
</script>

<style>

</style>
<!--
export default {
  components: {
    LineChart
  },
  data () {
    return {
      datacollection: null
    }
  },
  mounted () {
    
    //this.fillData();
  },
  methods: {
    fillData () {
      
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()]
          }, {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}*/
/*import * as graphScript from '../components/PlotlyGraphs.js'
//var ctx = document.getElementById('myChart').getContext('2d');

export default {
  name: "default",
  data() {
    return {
      grapher: graphScript.foo(4,5)
    }
  },
  methods: {
    w: function() {
      graphScript.chartjs(ctx);
      
    }
  }
}
/*
import  Plotly  from '../../node_modules/plotly';

export default {
  name: "PlotlyTestv2",
  template: '<div><h1> Hello </h1><div ref="plot1", id="plot1"></div></div>',
  data: function() {
    return {
      count: 0,
      data:[{ x: [1,2,3,4], y: [10,15,13,17], type:"scatter" }],
      attr: { displayModeBar: true },
      layout: { title: "My graph :)" }
    };
  },
  mounted() {
    Plotly.plot(this.$refs.plot1, this.data);
  },
  methods: {
    button_click_func: function() {
      console.log("Clicked the button: " + this.count, " y[0] = ", this.data[0].y[0]);
      this.count += 1;
      this.$set(this.data[0].y, 0, this.data[0].y[0] + 1);
    }
  } 
}*/

/*<template>
  <div id="app">
    <pie-chart :data="chartData" :options="chartOptions"></pie-chart>
  </div>
</template>

<script>
import PieChart from "../components/PlotlyGraphs";
export default {
  name: "App",
  components: {
    PieChart
  },
  data() {
    return {
      chartOptions: {
        hoverBorderWidth: 20
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["Green", "Red", "Blue"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
            data: [1, 10, 5]
          }
        ]
      }
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
-->