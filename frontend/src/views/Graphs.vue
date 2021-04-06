<template>
    <div class="home">
    
      <h1 class="card-title">Welcome to the Colite Technology Data Visualization Application!</h1>
      <div class="card-body" id="tester">
        Test
      </div>
      <b-jumbotron> 
      <div id="graph">
          test3
          {{ message }}
        <!--<PlotlyTestv2></PlotlyTestv2>-->
      </div>
        </b-jumbotron> 
    </div>
</template>

<script>
import * as mykey from '../components/PlotlyGraphs.js'

export default {
  data() {
    return {
      message: mykey.aVar // Hello Vue.js!
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