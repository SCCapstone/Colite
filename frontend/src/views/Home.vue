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
        the "Data Visualization" tab. In addition, you are able to view them on a google maps 
        page by clicking the "Map" tab.
      </div>
      <div class="card-body"> 
        This website features a database and web application that will allow 
        for users to be able to view visualizations of the data that the system 
        receives from the Colite systems. The application is hosted through the
        Amazon Web Services cloud computing service. Feel free to visit our Contact Us
        Page and reach out to a developer if you have any questions about the features provided.
      </div>
      <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6">
            <div class="card" style="margin = 20px">
              <div class="card-body">
                <h5 class="card-title">Learn about Colite Technologies</h5>
                
                <router-link to="/about">
                  <b-button size="lg" variant="success">Our About Us Page</b-button>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Need help with how to use the application?</h5>
                <router-link to="/contactUs">
                  <b-button size="lg" variant="success">
                    Contact Us 
                  </b-button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img alt="ColiteLogo" src="../assets/colite2.png" height="300px">
    </b-jumbotron>
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
border-color: white;
margin: 1%;
}
.card-body {
background-color: #2c3e50;
/* padding: 2.50rem; */
}
</style>