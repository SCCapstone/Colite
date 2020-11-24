<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by id_number"
          v-model="id_number"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchIdNumber"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Poles List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(pole, index) in poles"
          :key="index"
          @click="setActivePole(pole, index)"
        >
          {{ pole.id_number }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllPoles">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentPole">
        <h4>Pole</h4>
        <div>
          <label><strong>ID_number:</strong></label> {{ currentPole.id_number }}
        </div>
        <div>
          <label><strong>Column_1:</strong></label> {{ currentPole.column_1 }}
        </div>

        <a class="badge badge-warning"
          :href="'/poles/' + currentPole.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Pole...</p>
      </div>
    </div>
  </div>
</template>

<script>
import PoleDataService from "../services/PoleDataService";

export default {
  name: "poles-list",
  data() {
    return {
      poles: [],
      currentPole: null,
      currentIndex: -1,
      id_number: ""
    };
  },
  methods: {
    retrievePoles() {
      PoleDataService.getAll()
        .then(response => {
          this.poles = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrievePoles();
      this.currentPole = null;
      this.currentIndex = -1;
    },

    setActivePole(pole, index) {
      this.currentPole = tutorial;
      this.currentIndex = index;
    },

    removeAllPoles() {
      TutorialDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchIdNumber() {
      PoleDataService.findByIdNumber(this.id_number)
        .then(response => {
          this.poles = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrievePoles();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>