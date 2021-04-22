<template>
<!-- Pole code is implemented here so that you can add, delete or update poles -->
  <div v-if="currentPole" class="edit-form">
    <h4>Pole</h4>
    <form>
      <div class="form-group">
        <!-- Setting varaibles and calling the id number -->
        <label for="id_number">Id_number</label>
        <input type="text" class="form-control" id="id_number"
          v-model="currentPole.id_number"
        />
      </div>
      <div class="form-group">
        <label for="column_1">Column_1</label>
        <input type="text" class="form-control" id="column_1"
          v-model="currentPole.column_1"
        />
      </div>
    </form>
    <!-- Code to delete a pole is lsited below -->
    <button class="badge badge-danger mr-2"
      @click="deletePole"
    >
      Delete
    </button>
    <!-- Code to update attributes of a pole is listed below -->
    <button type="submit" class="badge badge-success"
      @click="updatePole"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Pole...</p>
  </div>
</template>

<script>
// Need to import poledataservice so that we can view and use values pulled from MySQL db
import PoleDataService from "../services/PoleDataService";

export default {
  name: "pole",
  data() {
    return {
      currentPole: null,
      message: ''
    };
  },
  // Methods section
  methods: {
    // Method for acquriing a pole id
    getPole(id) {
      PoleDataService.get(id)
        .then(response => {
          this.currentPole = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    // Method for updating a pole
    updatePole() {
      PoleDataService.update(this.currentPole.id, this.currentPole)
        .then(response => {
          console.log(response.data);
          this.message = 'The pole was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },
    // Method for deleting a pole
    deletePole() {
      PoleDataService.delete(this.currentPole.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "poles" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getPole(this.$route.params.id);
  }
};
</script>

<style scoped>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>