//Written by Andrew Denman
import { Bar , mixins} from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Bar,
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
    //Sets up the chart data to be drawn on the chart area
    renderSelectedData: function(in_dataX,in_dataY,color,in_label) {

      var newLabels = in_dataX;
      var newData = in_dataY;
  
      var aChartdata = {
        labels: newLabels,
        datasets: [
          {
            label: in_label,
            data: newData,
            backgroundColor: color,
            borderWidth: 1,
            borderColor: '#000000'
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