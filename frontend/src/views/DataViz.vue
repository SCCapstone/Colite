<template>
<!-- Old page that we used for data visualization. Currently now used for formatting -->
  <div class="container-fluid">
    <!-- <div class="body"> -->
    <!-- <h1 class="card-body"> -->
      <h1 class="card-title">Welcome to the Colite Technology Data Visualization Page!</h1>
    <!-- </h1> -->
    <h5 class="card-body">
      From here you have the ability to visualize any inputted data 
      points being given from the poles, panels and other sources. 
      Click the widget by the graph to be able to filter by data types, locations,
      and other data types. In addition, you have the ability to export your data 
      visualization so that you can view it outside of the application. 
    </h5>
    <br>
    <!-- <span class="border border-success"> -->
      <!-- Ability to align graphs below via wrapper 1-->
    <div class="chart-wrapper">
      <apexchart
        width="700" type="scatter"
        :options="options" :series="series">
      </apexchart>
    </div>
    <!-- </span>  -->
    <hr>
    <!-- Wrapper 2 for the graphs -->
    <div class="chart-wrapper2">
      <apexchart
        width="700" type="bar"
        :options="options1" :series="series1">
      </apexchart>
    </div>  
    <hr>
    <!-- </span>   -->
    <h3 class="card-body">
      If you have any questions feel free to visit the Contact Us Page!
    </h3>
    <!-- </div> -->
    <!-- <img alt="ColiteLogo" src="../assets/colite2.png"> -->
  </div>

</template>
<script>
export default {
  // Chart 1 is no longer being used the data below for it is no longer valid/shown anywhere
  name: 'Chart1',
  data: () => ({
    options: {
      chart: {
        id: 'Colite Poll Data Viz',
      },
      xaxis: {
        colors: '#FFFFFF',
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
          color: '#FFFFFF',
        },
      },
      title: {
        text: 'Poll Data Voltages',
        align: 'center',
        colors: ['#95c23b'],
        style: {
          fontSize: '20px',
          color: '#95c23b',
        },
      },
      colors: ['#95c23b'],
      labels: {
        style: {
          colors: ['#FFFFFF'],
        }
        // colors: ['#FFFFFF']
      }
    },
    series: [{
      name: 'Poll Voltage',
      data: [55, 62, 89, 66, 98, 72, 101, 75, 94, 81],
      style: {
        fontSize: '20px',
      }
    }],
    series1: [{
      name: 'Temperature Averages',
      data: [14.1,13.7,13.5,14.2,13.7,13.7,14.1,13.9,13.7,14.1],
      style: {
        fontSize: '20px',
      }  
    }],
    options1: {
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
          // color: '#FFFFFF',
        },
      },
      title: {
        text: 'Poll Data Temperatures',
        align: 'center',
        color: '#FFFFFF',
        style: {
          fontSize: '20px',
          color: '#95c23b',
        },
      },
      colors: ['#95c23b'],
    },
  }),
  // name: 'Chart2',
  // data: () => ({
  //   options2: {
  //     chart: {
  //       id: 'Colite Poll Data Viz2',
  //     },
  //     xaxis: {
  //       colors: ['#FFFFFF'],
  //       type: 'category',
  //       categories: [
  //        "Poll 1",
  //        "Poll 2",
  //        "Poll 3",
  //        "Poll 4",
  //        "Poll 5",
  //        "Poll 6",
  //        "Poll 7",
  //        "Poll 8",
  //        "Poll 9",
  //        "Poll 10"
  //       ],
  //       style: {
  //         fontSize: '20px',
  //         color: ['#FFFFFF'],
  //       },
  //     },
  //     title: {
  //       text: 'Colite Poll Data Visualization',
  //       align: 'center',
  //       color: '#FFFFFF',
  //       style: {
  //         fontSize: '20px',
  //         color: 'FFFFFF',
  //       },
  //     },
  //     colors: ['#95c23b'],
  //   },
  //   series2: [{
  //     name: 'Poll Temperatures',
  //     data: [55, 62, 89, 66, 98, 72, 101, 75, 94, 80],
  //     style: {
  //       fontSize: '20px',
  //     }
  //   }]
  // }),
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
  background-color: #FFFFFF;
  border-color: #95c23b;
}
div.chart-wrapper2 {
  display: flex;
  align-items:center;
  justify-content: center;
  background-color: #FFFFFF;
}
.card-title {
  background-color:  #2c3e50;
}
.h1 {
  font-weight: bolder;
}
.container-fluid {
  border-block: red;
}
/* .h3 {
  font-size: 1.2rem;
} */
</style>
