<template>
  <div class="about">
    <b-jumbotron>
      <div class="card-title">
        <h1 class="card-title"> About Our Application and the Functions it Has!</h1>
      </div>
      
      <div class="card-body">
          <br>
          The main purpose of the application is to be able to take a database filled with many different data points
          and be able to visualize them in one of several different data visualizations. You will also be able to 
          export any visualization you choose, as well as being able to implement any changes to the data that you 
          feel necessary. Another major feature is the ability to alter and search for existing parts in our database 
          you will need to leave a comment if you wish to make changes detailing what you changed or altered. In addition, we 
          have a map of all of our existing polls that will highlight the various outputs from each poll that is being used in 
          the database. The application works by utilizing Amazon Web Service applications to allow for specific data visualizations. Users
          have the ability to choose from any of more than fifteen different graph types offered my Amazon QuickSight!
          In addition, users can use any of more than ten different sources to analyze or view data visualizations. 
          This means you can choose an Excel file, SQL source, S3, Athena, RDS or even a shared SQL server among other sources. 
          Users will be able to add different headers, footers, titles, or even colors to make the graph more user friendly and
          easier to read as a whole. 
      </div>
      <h4 class="card-body">This application was designed by Matthew Hayward, Simon Benzer, Andrew Denman, Kailen King and Kundana Narla - Members of the 
        Colite Technology Capstone Group! </h4>
      <br>
    <img alt="ColiteLogo" src="../assets/colite2.png" width="27%">
    </b-jumbotron>
  </div>
</template>

<style scoped>
.jumbotron {
  background-color: #2c3e50;
}
.card-body {
  background-color: #2c3e50;
  font-size: 20px;
}
.card-title {
  background-color: #2c3e50;
}
</style>
