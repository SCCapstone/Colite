<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
import PoleDataService from "../services/PoleDataService";


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
    randomizeData: function() {

      var newLabels = [];
      var newData = [];
      var i;

      var len = 100;
    
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
      console.log("newlabels: "+newLabels);
      console.log("new data: "+newData);




      console.log("set data/options: "+this);
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
</script>