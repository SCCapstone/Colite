<template>
  <div class="container-fluid">
    <!-- <div class="body"> -->
    <h3 class="card-body">
      <h1 class="card-title">Welcome to the Colite Technology Data Visualization Page!</h1>

      From here you have the ability to visualize any inputted data 
      points being given from the poles, panels and other sources. 
      Click the widget by the graph to be able to filter by data types, locations,
      and other data types. In addition, you have the ability to export your data 
      visualization so that you can view it outside of the application. 
    </h3>
    <br>
    <div class="chart-wrapper">
      <apexchart
        width="700" type="scatter"
        :options="options" :series="series1">
      </apexchart>
     </div> 
     <div class="chart-wrapper2">
       <apexchart
        width="700" type="bar"
        :options="options" :series="series2">
      </apexchart>
     </div>  
    <br>
    <h3 class="card-body">
      If you have any questions feel free to visit the Contact Us Page!
    </h3>
    <!-- </div> -->
    <!-- <img alt="ColiteLogo" src="../assets/colite2.png"> -->
  </div>

</template>
<script>
export default {
  name: 'Chart1',
  data: () => ({
    options: {
      chart: {
        id: 'Colite Poll Data Viz',
      },
      xaxis: {
        colors: ['#FFFFFF'],
        type: 'category',
        categories: [
         "Poll 1",
         "Poll 2",
         "Poll 3",
         "Poll 4",
         "Poll 5",
         "Poll 6",
         "Poll 7",
         "Poll 8",
         "Poll 9",
         "Poll 10"
        ],
        style: {
          fontSize: '20px',
          color: ['#FFFFFF'],
        },
      },
      title: {
        text: 'Colite Poll Data Visualization',
        align: 'center',
        color: '#FFFFFF',
        style: {
          fontSize: '20px',
          color: 'FFFFFF',
        },
      },
      colors: ['#95c23b'],
    },
    series1: [{
      name: 'Poll Voltage',
      data: [55, 62, 89, 66, 98, 72, 101, 75, 94, 80],
      style: {
        fontSize: '20px',
      }
    }]
  }),
  name: 'Chart2',
  data: () => ({
    options: {
      chart: {
        id: 'Colite Poll Data Viz',
      },
      xaxis: {
        colors: ['#FFFFFF'],
        type: 'category',
        categories: [
         "Poll 1",
         "Poll 2",
         "Poll 3",
         "Poll 4",
         "Poll 5",
         "Poll 6",
         "Poll 7",
         "Poll 8",
         "Poll 9",
         "Poll 10"
        ],
        style: {
          fontSize: '20px',
          color: ['#FFFFFF'],
        },
      },
      title: {
        text: 'Colite Poll Data Visualization',
        align: 'center',
        color: '#FFFFFF',
        style: {
          fontSize: '20px',
          color: 'FFFFFF',
        },
      },
      colors: ['#95c23b'],
    },
    series2: [{
      name: 'Poll Temperatures',
      data: [55, 62, 89, 66, 98, 72, 101, 75, 94, 80],
      style: {
        fontSize: '20px',
      }
    }]
  }),
}
</script>

<style scoped>
.dataViz {
  background-color: #2c3e50;
  /* min-height: 100%; */
  /* height: 100%; */
  height: 100vh;
}
div.chart-wrapper {
  display: flex;
  align-items:center;
  justify-content: center;
}
div.chart-wrapper2 {
  display: flex;
  align-items:center;
  justify-content: center;
}
.card-title {
  background-color:  #2c3e50;
}
</style>
