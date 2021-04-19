import { Line , mixins} from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixin: [reactiveProp],
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
  methods: {
    renderSelectedData: function(in_dataX,in_dataY) {

      
      var newLabels = in_dataX;
      var newData = in_dataY;
  
      var aChartdata = {
        labels: newLabels,
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: newData
          }
        ]
      };
      return aChartdata;
    },
  },
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}