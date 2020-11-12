<template>
  <div class="home">
    <!--<Navbar></Navbar>-->
    <h1>This is the home page</h1>
    <img alt="Vue logo" src="../assets/logo.png">
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
