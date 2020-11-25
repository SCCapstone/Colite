<template>
  <div class="container-fluid">
    <h1 class="card-title">Welcome to the Colite Technology Data Visualization Page!</h1>
    <div class="card-body">
    <h3 class="card-body">
      From here you have the ability to visualize any inputted data 
      points being given from the poles, panels and other sources. 
      Click the widget by the graph to be able to filter by data types, locations,
      and other data types. In addition, you have the ability to export your data 
      visualization so that you can view it outside of the application. 
    </h3>
    <br>
    <div class="chart-wrapper">
      <apexchart
        width="800" type="scatter"
        :options="options" :series="series">
      </apexchart>
     </div> 
    <br>
    <h3 class="card-body">
      If you have any questions feel free to visit the Contact Us Page!
    </h3>
    </div>
    <!-- <img alt="ColiteLogo" src="../assets/colite2.png"> -->
  </div>

</template>
<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    options: {
      chart: {
        id: 'vuechart-example'
      },
      xaxis: {
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
        ]
      }
    },
    series: [{
      name: 'Poll Voltage',
      data: [55, 62, 89, 66, 98, 72, 101, 75, 94, 120, 117, 139]
    }]
  })
}
</script>

<style>
.dataViz {
  background-color: #2c3e50;
  /* min-height: 100%; */
  /* height: 100%; */
  height: 100vh;
}
div.chart-wrapper {
  display: flex;
  align-items:center;
  justify-content: center
}
</style>
