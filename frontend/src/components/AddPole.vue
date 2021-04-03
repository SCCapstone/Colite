<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="pole_id">Id Number</label>
        <input
          type="text"
          class="form-control"
          id="pole_id"
          required
          v-model="pole.pole_id"
          name="pole_id"
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
        pole_id: "",
        column_1: ""
      },
      submitted: false
    };
  },
  methods: {
    savePole() {
      var data = {
        pole_id: this.pole.pole_id,
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