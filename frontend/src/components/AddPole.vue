<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="id_number">Id Number</label>
        <input
          type="text"
          class="form-control"
          id="id_number"
          required
          v-model="pole.id_number"
          name="id_number"
        />
      </div>

      <div class="form-group">
        <label for="column_1">Column 1</label>
        <input
          class="form-control"
          id="column_1"
          required
          v-model="Pole.column_1"
          name="column_1"
        />
      </div>

      <button @click="savePole" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newPole">Add</button>
    </div>
  </div>
</template>

<script>
import PoleDataService from "../services/PoleDataService";

export default {
  name: "add-pole",
  data() {
    return {
      pole: {
        id: null,
        id_number: "",
        column_1: ""
      },
      submitted: false
    };
  },
  methods: {
    savePole() {
      var data = {
        id_number: this.pole.id_number,
        column_1: this.pole.column_1
      };

      PoleDataService.create(data)
        .then(response => {
          this.pole.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newPole() {
      this.submitted = false;
      this.pole = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>