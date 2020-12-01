
<template>
  <div id="app">
    <Navbar> </Navbar>
    <br />
   
    <!--<div id="nav" class="nav mt-4">
      <router-link to="/"><img alt="ColiteLogo" src="@/assets/coliteNavBar.png"></router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/dataViz">Data Visualization</router-link> |
      <router-link to="/listOfParts">List of Parts</router-link> |
      <router-link to="/map">Map</router-link> |
    </div>-->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #95c23b;
  background-color: #2c3e50;
  // padding: 2.50rem;
  // margin-block-end: 10px;  
}
.card-body {
  background-color: #2c3e50;
}
/* Modify the backgorund color */ 
.navbar-custom { 
    background-color: #95c23b; 
} 
#nav {
  padding: 10px;
  background-image: linear-gradient(to right, #2c3e52);
  background-color: #2c3e50;

  a {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 25px;
    font-weight: bold;
    color: #e4e4e4;

    &.router-link-exact-active {
      color: #2c3e50;
    }
  }
}
#navbar {
  background-color: #2c3e50;
}
</style>