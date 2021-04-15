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
    renderSelectedData: function(in_data) {

      
      var newLabels = [];
      var newData = [];
      var i;

      var len = 0;
      in_data.forEach(element => {
        len++;
      });
      for(i = 0; i<len;++i) {
        newLabels.push(i);
      }

      for(i =0; i<len;++i){
        newData.push(Math.floor(Math.random()*100));
      }
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
      var aOptions = {
        responsive: true,
        maintainAspectRatio: false
      
      };
      //console.log("newlabels: "+newLabels);
      //console.log("new data: "+newData);




      //console.log("set data/options: "+this);
      return aChartdata;
    },
    getRandomInt: function() {
      return Math.sin(Math.random());
    }
  },
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
/*import { Doughnut, mixins } from "vue-chartjs";
export default {
  extends: Doughnut,
  props: ["data", "options"],
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.data, {
      borderWidth: "10px",
      hoverBackgroundColor: "red",
      hoverBorderWidth: "10px"
    });
  }
};

import { LinearScale } from 'chart.js';
import Vue from 'vue';
import { Line } from 'vue-chartjs'

var plotly = require('plotly/index.js')('node-test-account', 'tpmz9ye8hg');
export const aVar = 'Vue';


function chartjs (ctx){

var myChart = new Chart(ctx, {

    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
return myChart;
}

export function graphed(dataX, dataY) {
    var trace1 = {
        x: dataX,
        y: dataY,
        type: 'scatter'
    };
    var ploting = plotly.newPlot('grap3h',trace1);
    alert("graphed called");
    return 7;

}
export function alerter() {
    return alert("ayy")
}
export function foo(a,b) {
    return a*b;
}
export function layout() {
    var layout1 = {
        autosize: false,
        width: 500,
        height: 500,
        margin: {
          l: 50,
          r: 50,
          b: 100,
          t: 100,
          pad: 4
        },
        paper_bgcolor: '#7f7f7f',
        plot_bgcolor: '#c7c7c7'
      };
    return layout1;
}


export default({
    extends: Line,
    props: ['chartdata','options'],
    data() {
        return {
            class1: 'revol',
            class2: 'revol'
        }

    },
    methods: {
      rollDice: function() {
        class1 += 'dic1';
        class2 += 'dic2';
        alert("confused");
        // ... some code
      },
      w: function() {
        alert("lll");
      },
      test: function() {
        
        
      },
      
      chartjs: function  (){
        
        var myChart = new Chart(class1, {
    
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
        });
        return myChart;
    }
    
    },
    //End Methods
    mounted() {
        this.renderChart(this.chartdata,this.options)
    }
  });*/