<!--written by Andrew Denman-->
<template>
	
    <div class="dataVis">
    
      <h1 class="card-title">Welcome to the Colite Technology Data Visualization Application!</h1>
      <!--List of poles to choose from-->
      <div class="col-md-6" style="width: 20%; float:left">
        <h4>Poles List</h4>
        <table class="list-group">
          <tr>
            <th>Mac Address</th>
          </tr>
          <tr class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(pole, index) in polesId"
            :key="index"
            @click="setActivePole(pole, index);"
          >
            <td>{{ pole.pole_id }}</td>
          </tr>
        </table>


      </div>
      <!-- Chart draw area-->
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
        <div id="scatterChart" v-if="!hideScatterChart">
          <scatter-chart :key="chartKey" 
          :chartdata="dataChart" 
          :options="options"></scatter-chart>
        </div>

      </div>

      <div style="margin: auto">
        <!--Buttons for chart -->
        
        <button v-for="(button, i) in buttonListStyle" v-on:click="selectChartType(button.param1);
        buttonSelectStyle(i)"
        :class="{
          'am-active': button.state,
          'am-not-active': !button.state
        }"
        :key=i>
          {{button.text}}
        </button>
        <button v-for="(button, i) in buttonList" v-on:click="renderSelected(button.param1,button.param2,button.chartLabel,button.XLabel);
        buttonSelect(i)"
        :class="{
          'am-active': button.state,
          'am-not-active': !button.state
        }"
        :key=i>
          {{button.text}}
        </button>

      </div>
      <div style="margin: auto; padding-top: 20px">
        <p>Input the number of data points you would like to display:</p>
        <input type="text" v-model="num_points" placeholder="Number of Data Points">
        <button v-on:click="selectChartType(null)" :class="{'am-not-active': true}">Update</button>
        <p>(displays newest data points first)</p>
      </div>
    </div>

</template>

<script>
import PoleDataService from "../services/PoleDataService";
import LineChart from '../components/PlotlyGraphs';
import BarChart from '../components/BarChart.js';
import ScatterChart from '../components/ScatterChart.js';

export default({
  components: {
    LineChart,
    BarChart,
    ScatterChart
  },
  data() {
    return {
      //pole list variables
      poles: [],
      polesId: [],
      currentPole: null,
      currentIndex: -1,
      pole_id: "",
      num_points: 100,
      //chart drawing variables
      chartType: "lineChart",
      hideLineChart: true,
      hideBarChart: true,
      hideScatterChart: true,
      chartKey: 0,
      dataChart: null,
      options: null,
      //style variables
      buttonListStyle: [
        {text: "Chart type Bar", param1: "barChart",state: false},
        {text: "Chart type Line", param1: "lineChart",state: false},
        {text: "Chart type Scatter", param1: "scatterChart",state: false},
      ],
      selectedStyle: false,
      selectedData: false,
      buttonList: [
        {text: "Render Over Voltage Comback", param1: "id",param2: "over_v_comeback",state: false, chartLabel: "Over Voltage Comback vs input id(time)", XLabel: "Over Voltage Comback"},
        {text: "Render Work Voltage Setup", param1: "id",param2: "work_v_setup",state: false, chartLabel: "Work Voltage Setup vs input id(time)", XLabel: "Work Voltage Setup"},
        {text: "Render Low Voltage Limit", param1: "id",param2: "low_v_limit",state: false, chartLabel: "Low Voltage Limit vs input id(time)", XLabel: "Low Voltage Limit"},
        {text: "Render MPPT Start Voltage", param1: "id",param2: "mppt_start_v",state: false, chartLabel: "MPPT Start Voltage vs input id(time)", XLabel: "MPPT Start Voltage"},
        {text: "Render Max Battery Limit", param1: "id",param2: "max_bat_limit",state: false, chartLabel: "Max Battery Limit vs input id(time)", XLabel: "Max Battery Limit"},
        {text: "Render Location", param1: "longitude",param2: "latitude",state: false, chartLabel: "Longitude vs Latitude", XLabel: "Longitude"},
        {text: "Render MPPT Close Voltage", param1: "id",param2: "mppt_close_v",state: false, chartLabel: "MPPT Close Voltage vs input id(time)", XLabel: "MPPT Close Voltage"}
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
    buttonSelectStyle(i) {
      this.buttonListStyle.forEach(element => {
        element.state = false;
      });
      this.buttonListStyle[i].state = true;
    },
    //methods for chart
    renderChart() {
      this.chartKey+=1;
    },
    //sects chart type
    selectChartType(chart_type) {
      //if(chart_type != this.chartType) {
      if(chart_type == null) {
        chart_type = this.chartType;
      }
      this.chartType = chart_type;
      //console.log("select type: "+chart_type);
      this.buttonList.forEach(element => {
        if(element.state == true) {
          this.renderSelected(element.param1,element.param2,element.chartLabel,element.XLabel);
        }
      });
      //}
    },
    
    //drawing the chart
    renderSelected(type_X,type_Y,dataLabel,in_XLabel) {
      var in_X = [];
      var in_Y = [];
      var color = [];
      var counter = 0;
      //console.log("barchart: "+BarChart);
      if(dataLabel == "Longitude vs Latitude") {
        for(var i = this.polesId.length-1; i >= 0;--i) { 
          var temp1 = this.polesId[i];
          in_X.push(this.readDataFromPoles(temp1,type_X));
          in_Y.push(this.readDataFromPoles(temp1,type_Y));
        }
      } else {
        for(var j = this.poles.length-1; j >= 0;--j) {
          var temp2 = this.poles[j];
          if(temp2 == null) {
            alert("Please select a pole");
          }
          //console.log("temp2: "+temp2);
          if(temp2.pole_id == this.currentPole.pole_id && counter < this.num_points) {
            counter++;
            in_X.push(this.readDataFromPoles(temp2,type_X));
            in_Y.push(this.readDataFromPoles(temp2,type_Y));
            if(this.chartType == "barChart") {
              var tempColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
              color.push(tempColor);
            }
          }
        }

      }
      counter = 0;
      //console.log("in_X: "+in_X+"\nin_Y "+in_Y);
      if(this.chartType == "barChart") {
        this.hideLineChart = true;
        this.hideBarChart = false;
        this.hideScatterChart = true;
        this.dataChart = BarChart.methods.renderSelectedData(in_X,in_Y,color,in_XLabel);
        this.options = {
          responsive: true,
          maintainAspectRatio: false
        };
      } else if(this.chartType == "lineChart") {
        this.hideLineChart = false;
        this.hideBarChart = true;
        this.hideScatterChart = true;
        this.dataChart = LineChart.methods.renderSelectedData(in_X,in_Y,in_XLabel);
        this.options = {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        };
      } else if(this.chartType == "scatterChart") {
        //console.log("selected scatter chart");
        this.hideLineChart = true;
        this.hideBarChart = true;
        this.hideScatterChart = false;
        this.dataChart = ScatterChart.methods.renderSelectedData(in_X,in_Y,in_XLabel);
        this.options = {
          responsive: true,
          maintainAspectRatio: false,
          scales: {       
            yAxes: [{
                stacked: true
            }]
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
        tempVal = Date.parse(item.createdAt);
      } else if (id == 'updatedAt') {
        tempVal = Date.parse(item.updatedAt);
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
          this.poles.forEach(element => {
            if(this.polesId == null){
              this.polesId.push(element);
            } else {
              var test = true;
              this.polesId.forEach(element2 => {
                if(element2.pole_id == element.pole_id) {
                  test = false;
                }
              });
              if(test) {
                this.polesId.push(element);
              }
            }
          });
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
      this.currentPole = this.polesId[index];
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
  border-radius: 8px;
  margin: 5px 5px;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  background-color: #308551;
  color: #ffffff;
  transition-duration: 0.4s;
 }
 .am-active:hover {
  border-radius: 8px;
  margin: 5px 5px;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  background-color: #309c59;
  color: #ffffff;
  transition-duration: 0.4s;
 }
 .am-not-active {
    border-radius: 8px;
    margin: 5px 5px;
    padding: 5px 5px;
    text-align: center;
    border: none;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    background-color: rgb(198, 207, 197);
    transition-duration: 0.4s;
 }
 .am-not-active:hover {
    border-radius: 8px;
    padding: 5px 5px;
    margin: 5px 5px;
    text-align: center;
    border: none;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    background-color: #308551;
    color: #ffffff;
 }
 input[type=text], select {
  width: 70px;
  text-align: center;
  padding: 5px 5px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
