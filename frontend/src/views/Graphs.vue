
<template>
	
    <div class="dataVis">
    
      <h1 class="card-title">Welcome to the Colite Technology Data Visualization Application!</h1>
      <div class="col-md-6" style="width: 20%; float:left">
        <h4>Poles List</h4>
        <table class="list-group">
          <tr>
            <th>Mac Address</th>
          </tr>
          <tr class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(pole, index) in poles"
            :key="index"
            @click="setActivePole(pole, index);"
          >
            <td>{{ pole.pole_id }}</td>
          </tr>
        </table>


      </div>

      <div class="small" style="width: 80%; float:right">

        <div id="lineChart" v-if="!hideLineChart">
          <line-chart :key="chartKey" 
          :chartdata="dataChart" 
          :options="options"></line-chart>
        </div>
        <div id="barChart" v-if="!hideBarChart">
          <bar-chart :key="chartKey" 
          :chartdata="dataChart" 
          :options="options"></bar-chart>
        </div>

      </div>

        <div style="margin: auto">

          
          <button v-on:click="renderChart" :class="{
            'am-active': true
          }">Update</button>
          <button v-on:click="selectChartType('barChart')" 
          :class="{
            'am-active': selectedStyle,
            'am-not-active': !selectedStyle
          }">Chart type Bar</button>
          <button v-on:click="selectChartType('lineChart')"
          :class="{
            'am-active': !selectedStyle,
            'am-not-active': selectedStyle
          }">Chart type Line</button>
          <!--<button v-on:click="renderSelected('id','over_v_comeback')"
          :class="{
            'am-active': selectedData,
            'am-not-active': !selectedData
          }">Render Over Voltage Comback</button>
          <button v-on:click="renderSelected('id','work_v_setup')">Render Work Voltage Setup</button>
          <button v-on:click="renderSelected('id','low_v_limit')">Render Low Voltage Limit</button>
          <button v-on:click="renderSelected('id','mppt_start_v')">Render MPPT Start Voltage</button>
          <button v-on:click="renderSelected('id','max_bat_limit')">Render Max Battery Limit</button>
          <button v-on:click="renderSelected('longitude','latitude')">Render Location</button>
          <button v-on:click="renderSelected('id','mppt_close_v')">Render MPPT Close Voltage</button>
          -->
          <button v-for="(button, i) in buttonList" v-on:click="renderSelected(button.param1,button.param2);
          buttonSelect(i)"
          :class="{
            'am-active': button.state,
            'am-not-active': !button.state
          }"
          :key=i>
            {{button.text}}
          </button>
        </div>

    </div>

</template>

<script>
import PoleDataService from "../services/PoleDataService";
import LineChart from '../components/PlotlyGraphs'
import BarChart from '../components/BarChart.js'

export default({
  components: {
    LineChart,
    BarChart
  },
  data() {
    return {
      //pole list variables
      poles: [],
      currentPole: null,
      currentIndex: -1,
      pole_id: "",
      //chart drawing variables
      chartType: "lineChart",
      hideLineChart: true,
      hideBarChart: true,
      chartKey: 0,
      dataChart: null,
      options: null,
      //style variables
      selectedStyle: false,
      selectedData: false,
      buttonList: [
        {text: "Render Over Voltage Comback", param1: "id",param2: "over_v_comeback",state: false },
        {text: "Render Work Voltage Setup", param1: "id",param2: "work_v_setup",state: false },
        {text: "Render Low Voltage Limit", param1: "id",param2: "low_v_limit",state: false },
        {text: "Render MPPT Start Voltage", param1: "id",param2: "mppt_start_v",state: false },
        {text: "Render Max Battery Limit", param1: "id",param2: "max_bat_limit",state: false },
        {text: "Render Locatio", param1: "longitude",param2: "latitude",state: false },
        {text: "Render MPPT Close Voltage", param1: "id",param2: "mppt_close_v",state: false }
      ]
    };
  },
 
  methods: {

    //methods for button coloring
    buttonSelect(i) {
      this.buttonList.forEach(element => {
        element.state = false;
      });
      this.buttonList[i].state = true;
    },
    //methods for chart
    renderChart() {
      this.chartKey+=1;
    },
    //sects chart type
    selectChartType(chart_type) {
      if(chart_type != this.chartType) {
        if(chart_type == "lineChart") {
          this.selectedStyle = false;
        } else if (chart_type == "barChart") {
          this.selectedStyle = true;
        }
        this.chartType = chart_type;
        this.buttonList.forEach(element => {
          if(element.state) {
            this.renderSelected(element.param1,element.param2);
            
          }
        });
      }
    },
    
    //drawing the chart
    renderSelected(type_X,type_Y) {
      var in_X = [];
      var in_Y = [];
      var color = [];
      //console.log("barchart: "+BarChart);
      this.poles.forEach(element => {
        //var temp = [];
        //temp = this.readDataFromPoles(element);
        in_X.push(this.readDataFromPoles(element,type_X));
        in_Y.push(this.readDataFromPoles(element,type_Y));
        if(this.chartType == "barChart") {
          var tempColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
          color.push(tempColor);
        }
      });
      //console.log("in_X: "+in_X+"\nin_Y "+in_Y);
      if(this.chartType == "barChart") {
        this.hideLineChart = true;
        this.hideBarChart = false;
        this.dataChart = BarChart.methods.renderSelectedData(in_X,in_Y,color);
        this.options = {
          responsive: true,
          maintainAspectRatio: false
        };
      } else if(this.chartType == "lineChart") {
        this.hideLineChart = false;
        this.hideBarChart = true;
        this.dataChart = LineChart.methods.renderSelectedData(in_X,in_Y);
        this.options = {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        };
      } else {
        console.log("error in render selected chart type\n "+this.chartType);
      }

      this.renderChart();

    },
    //takes in id to see what data point the user wants to render.
    readDataFromPoles(item,id) {
      var tempVal;
      if(id == 'id') {
        tempVal = item.id;
      } else if (id == 'pole_id') {
        tempVal = item.pole_id;
      } else if (id == 'load1_time1_set') {
        tempVal = item.load1_time1_set;
      } else if (id == 'load1_time2_set') {
        tempVal = item.load1_time2_set;
      } else if (id == 'load1_outmode') {
        tempVal = item.load1_outmode;
      } else if (id == 'load2_time1_set') {
        tempVal = item.load2_time1_set;
      } else if (id == 'load2_time2_set') {
        tempVal = item.load2_time2_set;
      } else if (id == 'load2_outmode') {
        tempVal = item.load2_outmode;
      } else if (id == 'scale_mode') {
        tempVal = item.scale_mode;
      } else if (id == 'param_setup_volta') {
        tempVal = item.param_setup_volta;
      } else if (id == 'work_v_setup') {
        tempVal = parseInt(item.work_v_setup);
      } else if (id == 'menu_password_1') {
        console.log("Error in readDataFromPoles");
      } else if (id == 'menu_password_2') {
        console.log("Error in readDataFromPoles");
      } else if (id == 'menu_password_3') {
        console.log("Error in readDataFromPoles");
      } else if (id == 'max_bat_limit') {
        tempVal = item.max_bat_limit;
      } else if (id == 'over_v_comeback') {
        tempVal = item.over_v_comeback;
      } else if (id == 'low_v_limit') {
        tempVal = item.low_v_limit;
      } else if (id == 'mppt_close_v') {
        tempVal = item.mppt_close_v;
      } else if (id == 'mppt_start_v') {
        tempVal = item.mppt_start_v;
      } else if (id == 'longitude') {
        tempVal = item.longitude;
      } else if (id == 'latitude') {
        tempVal = item.latitude;
      } else if (id == 'createdAt') {
        tempVal = item.createdAt;
      } else if (id == 'updatedAt') {
        tempVal = item.updatedAt;
      } else {
        console.log("Error in readDataFromPoles");
      }
      return tempVal;
    },
    //methods for pole list
    retrievePoles() {
      PoleDataService.getAll()
        .then(response => {
          this.poles = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrievePoles();
      this.currentPole = null;
      this.currentIndex = -1;
    },

    setActivePole(pole, index) {
      this.currentPole = pole;
      this.currentIndex = index;
    },

    removeAllPoles() {
      PoleDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchIdNumber() {
      PoleDataService.findByIdNumber(this.pole_id)
        .then(response => {
          this.poles = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

  },
  mounted () {
    this.retrievePoles();
  }
});
</script>

<style>
.am-active {
    background-color: rgb(77, 179, 111);
    color: rgb(0, 0, 0);
 }
 .am-not-active {
    background-color: rgb(198, 207, 197);
 }
</style>
