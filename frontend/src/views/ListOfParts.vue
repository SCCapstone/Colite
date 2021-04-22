<!--<script src="vue.js"></script>-->
<!--<script src="https://unpkg.com/axios/dist/axios.min.js"></script>-->

<template>
<!-- List of parts page here -->
  <div id="listOfParts" class="listOfParts">
  <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand"></router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <!-- Below the navbar we have added a title header list of poles -->
          <router-link to="/polesList" class="nav-link">List of Poles</router-link>
        </li>
        <li class="nav-item">
          <!-- Header for adding poles below -->
          <router-link to="/addPole" class="nav-link">Add Poles</router-link>
        </li>
      </div>
    </nav>
    <br>
    <h1>Welcome to the list of all active parts page!</h1>
  </div>
</template>

<style>
/* Styling code and colors is done here */
.listOfParts {
  background-color: #2c3e50;
  /* min-height: 100%; */
  /* height: 100%; */
  height: 100vh;
}
</style>