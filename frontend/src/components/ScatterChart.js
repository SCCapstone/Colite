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
        var bestFit = [];
        var bestFitScatter = [];

        for(i = 0; i<length; ++i) {
            var temp = {
                x: in_dataX[i],
                y: in_dataY[i]
            };
            newData.push(temp);
        }
        //console.log("in x: "+in_dataX+"\nin y: "+in_dataY);
        bestFit = this.LineofBestFit(in_dataX,in_dataY);
        //console.log("Best fit y values: "+bestFit);

        for(i = 0; i<length; ++i) {
          var temp = {
              x: in_dataX[i],
              y: bestFit[i]
          };
          bestFitScatter.push(temp);
        }
        //console.log("scatter data: "+newData);
        //console.log("scatter data: "+bestFitScatter);
        var aChartdata = {
            datasets: [{
              label: in_label,
              fill: false,
              showLine: false,
              borderColor: '#000000',
              backgroundColor: '#308551',
              data: newData
            }, {
              label: 'Line of Best Fit',
              data: bestFitScatter,
              type: 'line',    
              fill:false,
              borderColor: '#ffffff',
              backgroundColor: '#308551',
              pointRadius: 0
            }]
          };
      return aChartdata;
    },
    LineofBestFit: function(in_dataX,in_dataY) {
      var outData = [];
      //setup variables
      var sum_x = 0.0;
      var sum_y = 0.0;
      var mean_x = 0.0;
      var mean_y = 0.0;
      var mean_top = 0.0;
      var mean_bottom = 0.0;
      var data_length = in_dataX.length;
      var m = 0.0;
      var b = 0.0; 

      //sum of x and y
      for(var i = 0; i< data_length;++i) {
        sum_x += parseInt(in_dataX[i]);
        sum_y += parseInt(in_dataY[i]);
      }
      //mean of x and y
      mean_x = sum_x / data_length;
      mean_y = sum_y / data_length;
      //console.log("mean_X "+mean_x,"\nmean_Y: "+mean_y+"\nsum_y: "+sum_y+"\nsum_x: "+sum_x);
      // summ of formula for line of best fit
      for(var j = 0; j< data_length;++j) {
        mean_top += (parseInt(in_dataX[j])- mean_x)*(parseInt(in_dataY[j]) - mean_y);
        mean_bottom += (parseInt(in_dataX[j])- mean_x)*(parseInt(in_dataX[j]) - mean_x);
      }
      //mean and y-intercept
      m = mean_top/mean_bottom;

      b = mean_y - (m*mean_x);

      //console.log("mean calculation: "+ m + "\nintercept calculation "+b);

      var temp_x = 0.0;
      var temp_y = 0.0;
      for(var k = 0; k< data_length; ++k) {
        temp_x = parseInt(in_dataX[k]);
        temp_y = temp_x * m + b;

        outData.push(temp_y);
      }

      return outData;
    }
  },
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}