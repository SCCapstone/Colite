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
    renderSelectedData: function(in_dataX,in_dataY,color) {

      var newLabels = in_dataX;
      var newData = in_dataY;
  
      var aChartdata = {
        labels: newLabels,
        datasets: [
          {
            label: 'Bar Chart',
            data: newData,
            backgroundColor: color,
            borderWidth: 1
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