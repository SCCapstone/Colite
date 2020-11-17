<template>
  <div class="home">
    <!--<Navbar></Navbar>-->
    <b-jumbotron>
      
    <h1 class="card-title">Welcome to the Colite Technology Data Visualization Application!</h1>
        <!-- <img alt="ColiteLogo" src="../assets/colite2.png"> -->

      <div class="card-body"> 
        Our application is centered around working with Colite Technology,
        a company helping businesses switch to renewable energy sources that promote 
        sustainable business and energy resilience.
      </div>
      <div class="card-body"> 
        This website features a database and web application that will allow 
        for users to be able to view visualizations of the data that the system 
        receives from the Colite systems. The application is hosted through the
        Amazon Web Services cloud computing service. Feel free to visit our Contact Us
        Page if you have any questions about the features provided.
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
</style>