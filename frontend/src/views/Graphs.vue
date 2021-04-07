
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
        <!--<PlotlyTestv2></PlotlyTestv2>-->
        <button v-on:click="w">Button</button>
      </div>
        </b-jumbotron> 
        <canvas id="myChart" width="400" height="400"></canvas>

    </div>

</template>

<script>
import * as graphScript from '../components/PlotlyGraphs.js'
export default {
  name: "default",
  data() {
    return {
      grapher: graphScript.foo(4,5)
    }
  },
  methods: {
    w: function() {
      graphScript.chartjs();
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