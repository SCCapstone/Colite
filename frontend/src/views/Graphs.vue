<!--<template>
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
<template>
	
    <div class="home">
    
      <h1 class="card-title">Welcome to the Colite Technology Data Visualization Application!</h1>
      <div class="card-body" id="tester">
        {{ grapher }}
        Plot:
      </div>
      <b-jumbotron> 
      <div id="graph">
          {{ grapher }}
        
        <button v-on:click="w">Button</button>
      </div>

        </b-jumbotron> 
<div class="small">
    <line-chart :chart-data="datacollection"></line-chart>

  </div>
    </div>

</template>

<script>
import LineChart from '../components/PlotlyGraphs'
/*
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
export default({
    components: {
    LineChart
  },
  data: {
    class1: 'revol',
    class2: 'revol'
  },
  methods: {
    rollDice: function() {
      class1 += 'dic1';
      class2 += 'dic2';
      alert("confused");
      // ... some code
    },
    w: function() {
      alert("lll");
    }
  }
});

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
</script>

<style>

</style>