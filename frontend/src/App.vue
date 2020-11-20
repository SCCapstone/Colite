
<template>
  <div id="app">
    <Navbar> </Navbar>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">shbenzer</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/poles" class="nav-link">Poles</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
    <!--<div id="nav" class="nav">
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
  
}

#nav {
  padding: 10px;
  background-image: linear-gradient(to right, #2c3e52);

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
</style>