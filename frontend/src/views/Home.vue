<template>
  <div class="home">
    <!--<Navbar></Navbar>-->
    <b-jumbotron>     
      <h1 class="card-title">Welcome to the Colite Technology Data Visualization Application!</h1>
          <!-- <img alt="ColiteLogo" src="../assets/colite2.png"> -->
      <div class="card-body"> 
        Our application is centered around working with Colite Technology,
        a company helping businesses switch to renewable energy sources that promote 
        sustainable business and energy resilience. The List of Parts page will allow for 
        you to view our current available polls and all of their associated data. You 
        have the ability to be able to change any of the data that is in the polls if you 
        wish. You can also view these polls in a data visualization format by clicking 
        the "Graphs" tab. In addition, you are able to view them on a google maps 
        page by clicking the "Map" tab. We also have a link to the Amazon QuickSight page 
        if you wish to use the AWS plugin QuickSight to create visualizations using excel or 
        a database hosted on AWS. 
      </div>
      <div class="card-body"> 
        This website features a database and web application that will allow 
        for users to be able to view visualizations of the data that the system 
        receives from the Colite systems. The application is hosted through the
        Amazon Web Services cloud computing service. Feel free to visit our Contact Us
        Page and reach out to a developer if you have any questions about the features provided.
      </div>
    <!-- <img alt="ColiteLogo" src="../assets/colite2.png"> -->
    </b-jumbotron>
    <HelloWorld msg="Welcome to the Colite Technologies Data Visualization Application"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Navbar
  }
}
</script>
<style scoped>
p {
font-size: 14pt;
}
.jumbotron {
background-color: #2c3e50;
/* padding: 2.50rem; */
}
.card-body {
background-color: #2c3e50;
padding: 2.50rem;
}
</style>