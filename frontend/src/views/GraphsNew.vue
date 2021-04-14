<template>
  <div class="dataVis">
    
      <h1 class="card-title">Welcome to the Colite Technology Data Visualization Application!</h1>
      <b-jumbotron> 
        <div >

          
          <!-- <button v-on:click="renderChart">Update</button>
          <button v-on:click="rand">Randomize Data</button> -->

        </div>

      </b-jumbotron> 
      <div class="small">
        <line-chart 
        v-if="loaded"
        
        :chartdata="dataLine" 
        :options="options"/>

      </div>
    </div>
</template>

<script>
import LineChart from '../components/ChartsGraphData.vue'

export default {
  name: 'LineChartContainer',
  components: { LineChart },
  data: () => ({
    loaded: false,
    chartdata: null
  }),
  async mounted () {
    this.loaded = false
    try {
      const { userlist } = await fetch('/api/userlist')
      this.chartdata = userlist
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>