<template>
  <div class="home">
    <!--<Navbar></Navbar>-->
    <b-jumbotron>     
      <h1 class="card-title">Welcome to the Colite Technologies Data Visualization Application!</h1>
          <!-- <img alt="ColiteLogo" src="../assets/colite2.png"> -->
      <div class="card-body"> 
        Our application is centered around working with Colite Technologies,
        a company helping businesses switch to renewable energy sources that promote 
        sustainable business and energy resilience. It will take in data from Colite 
        Technologies energy polls through a MySQL database we have hosted on AWS.
        You will be able to view this data in several ways! First, you can click on 
        the List of Parts Page and then the respective MAC address for the poll you wish to view.
        Want to visualize your data in an aerial view? Head on over to the Maps section and you 
        even have the ability to drop yourself into where the poll is located through the google maps
        API. Lastly, select the Graphs page to visualize any of the poll data categories in a line, scatter, 
        or bar graph format! All of this data comes directly from the Colite Technologies servers and it 
        will update whenever the MySQL database is changed. 
        <br> <br>
        We have also added a link to the AWS QuickSight plugin to allow for you to create your own visualizations 
        by connecting to the MySQL datbase through AWS. Not your style? QuickSight can also include AWS data, 
        third-party data, Excel spreadsheet data, SaaS data, B2B data, and more.
        This website features a database and web application that will allow 
        The application is hosted through the Amazon Web Services cloud computing service. 
        <br>
        <br>
        Confused or have any questions about how to work the application?
        Just visit the Contact Us page and reach out to any of the 5 developers to have any of your 
        questions answered!
        <br>
        <br>
        <b> <i>If you want to view the source code used to create this application here is a link to the github repository:
        https://github.com/SCCapstone/Colite </i> </b>
      </div>

      <h5>
        Below you will find a video (placeholder) highlighting our features and what problems you are able to solve 
        by using our application!
      </h5>
      <div class="video-embed"> 
        <video-embed css="embed-responsive-21by9" class="video-embed" src="https://www.youtube.com/watch?v=qZXt1Aom3Cs&ab_channel=TraversyMedia"></video-embed>  

        <!-- sample embedded image below -->
        <!-- <img alt="Video Embed Component for Vue.JS" loading="lazy" class="img-fluid w-full" src="https://i.morioh.com/2019/11/04/ddb5ea1ce140.jpg"> -->
      </div>
    <!-- <img alt="ColiteLogo" src="../assets/colite2.png"> -->
      <br>
      <b-container class="images-embed">
        <h4>
          What features can our application provide?
        </h4>
        <b-row>
            <b-col> <!--<img alt="Map" src="@/assets/embedded-map.PNG">--> Visualizing Polls on Google Maps!</b-col>
          <b-col> Create Your Own Graphs! </b-col>
          <b-col> Viewing the Results of Each Poll!</b-col>
        </b-row>
      </b-container>
    </b-jumbotron>
    <HelloWorld msg="Welcome to the Colite Technologies Data Visualization Application"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
// import Map from '../assets/embedded-map.PNG'

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
padding-top: 10px;
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
.card-title {
  padding: 0px;
  margin: 0px;
}

</style>