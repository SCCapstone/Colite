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
    },
  },
  methods: {
    renderSelectedData: function(in_dataX,in_dataY,in_label) {

      var newLabels = in_dataX;
      var newData = in_dataY;
  
      var aChartdata = {
        labels: newLabels,
        datasets: [
          {
            label: in_label,
            backgroundColor: '#95c23b',
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