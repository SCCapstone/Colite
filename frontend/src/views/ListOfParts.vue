<!--<script src="vue.js"></script>-->
<!--<script src="https://unpkg.com/axios/dist/axios.min.js"></script>-->

<template>
  <div id="listOfParts" class="listOfParts">
  <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand"></router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/poles" class="nav-link">List of Poles</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add Poles</router-link>
        </li>
      </div>
    </nav>
    <br>
    <h1>Welcome to the list of all active parts page!</h1>
  </div>
</template>

<style>
.listOfParts {
  background-color: #2c3e50;
  /* min-height: 100%; */
  /* height: 100%; */
  height: 100vh;
}
</style>