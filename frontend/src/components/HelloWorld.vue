<template>
  <div>
    <div>
      <b-jumbotron>
     <hr class="my-4" />       
      </b-jumbotron>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6">
          <div class="card" style="margin = 20px">
            <div class="card-body">
              <h5 class="card-title">Learn about Colite Technologies</h5>
              
              <router-link to="/about">
                <b-button size="lg" variant="primary">Our About Us Page</b-button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Need help with how to use the application?</h5>
              <router-link to="/contact">
                <b-button size="lg" variant="primary">
                  Contact Us 
                </b-button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
// import router from "../router.js";

export default {
  name: 'HelloWorld',
  components: {
    Navbar
  },
  data() {
    return {};
  },
  methods: {},
  computed: {} 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
// h5 {
//   margin: 40px 0 0;
// }
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
