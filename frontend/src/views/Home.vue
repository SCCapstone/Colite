<template>
  <div class="home">
    <!--<Navbar></Navbar>-->
    <b-jumbotron>     
      <h1 class="card-title">Welcome to the Colite Technologies Data Visualization Application!</h1>
          <!-- <img alt="ColiteLogo" src="../assets/colite2.png"> -->
      <div class="card-body"> 
        Our application is centered around working with Colite Technologies,
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
        <br>
        <b> <i>Here is a link to the github repository with the code used to create the application: 
        https://github.com/SCCapstone/Colite </i> </b>
      </div>

      <h3>
        Below you will find a video (placeholder) highlighting our features and what problems you are able to solve 
        by using our application!
      </h3>
      <div class="video-embed"> 
        <video-embed css="embed-responsive-21by9" class="video-embed" src="https://www.youtube.com/watch?v=qZXt1Aom3Cs&ab_channel=TraversyMedia"></video-embed>  

        <!-- sample embedded image below -->
        <!-- <img alt="Video Embed Component for Vue.JS" loading="lazy" class="img-fluid w-full" src="https://i.morioh.com/2019/11/04/ddb5ea1ce140.jpg"> -->
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
.video-embed {
max-width: 70%;
max-height: 70%;
/* position: absolute; */
top: 0;
right: 0;
bottom: 0;
left: 0;
margin: auto;
}

</style>