<template>
  <div class="home">
    <!--<Navbar></Navbar>-->
    <h1>Welcome to the Colite Technology Data Visualization Application!</h1>
        <!-- <img alt="ColiteLogo" src="../assets/colite2.png"> -->
    <p> 
      Our application is centered around working with Colite Technology,
      a company helping businesses switch to renewable energy sources that promote 
      sustainable business and energy resilience.
      </p>
      <br>
    <p> 
      This website features a database and web application that will allow 
      for users to be able to view visualizations of the data that the system 
      receives from the Colite systems. The application is hosted through the
      Amazon Web Services cloud computing service. Feel free to visit our Contact Us
      Page if you have any questions about the features provided.
    </p>
    <br>
    <br>
    <br>
    <!-- <img alt="ColiteLogo" src="../assets/colite2.png"> -->
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