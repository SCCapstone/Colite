<template>
  <div v-if="currentPole" class="edit-form">
    <h4>Pole</h4>
    <form>
      <div class="form-group">
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

    <button class="badge badge-danger mr-2"
      @click="deletePole"
    >
      Delete
    </button>

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
import PoleDataService from "../services/PoleDataService";

export default {
  name: "pole",
  data() {
    return {
      currentPole: null,
      message: ''
    };
  },
  methods: {
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

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>