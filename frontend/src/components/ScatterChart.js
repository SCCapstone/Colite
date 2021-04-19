import { Scatter , mixins} from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Scatter,
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
    renderSelectedData: function(in_dataX,in_dataY,in_label) {
        var length = in_dataX.length;
        var i = 0;
        var newData = [];

        for(i = 0; i<length; ++i) {
            var temp = {
                x: in_dataX[i],
                y: in_dataY[i]
            };
            newData.push(temp);
        }
        //console.log("scatter data: "+newData);
        var aChartdata = {
            datasets: [{
              label: in_label,
              fill: false,
              borderColor: '#77943c',
              backgroundColor: '#95c23b',
              data: newData
            }]
          };
      return aChartdata;
    },
  },
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}