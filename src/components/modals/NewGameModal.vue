<template>
    <div class="modal" id="newGameModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">New Game</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <label for="game_name">Name</label>
            <input id="game_name" type="text" v-model="name" placeholder="Name of the Game">

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" v-on:click="clickNewGame()">Save changes</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
//https://medium.com/vue-mastery/vuex-intro-tutorial-course-38ca0bca7ef4
import $ from 'jquery';
export default {
  name: 'NewGameModal',
  data: function() {
    return {
      name: this.game_name
    }
  },
  methods: {
    clickNewGame: function() {
      console.log('i close')
      this.$store.dispatch('addNewGame',{'game_name':this.name});
      this.name = "";
      $('#newGameModal').modal('hide');
    }
  },
  mounted: function() {
  }
}
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
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
