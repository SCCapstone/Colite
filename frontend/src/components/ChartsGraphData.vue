

<template>

  
</template>
<script>
import { Line } from 'vue-chartjs'
import PoleDataService from "../services/PoleDataService";

export default {
  extends: Line,
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>