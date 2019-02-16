<template>
  <div class="container">
    <span class="challenge-header">Games</span>
    <div class="row" v-for="game in games" :key="game.name">
      <div class="col-sm">
        <span class="game-name">{{game.name}}</span>
      </div>
      <div class="col-sm">
        {{game.wins}} / {{game.plays}}
      </div>
      <div class="col-sm">
        {{game.high_score}}
      </div>
      <div class="col-xs">
        <button type="button" class="btn btn-success" v-on:click="incrementGame(game)">+ Win</button>
      </div>
      <div class="col-xs">
        <button type="button" class="btn btn-success" v-on:click="incrementHighScore(game)">+ HS</button>
      </div>
      <div>
        <button type="button" class="btn btn-danger" v-on:click="decrementGame(game)">- Win</button>
      </div>
      <div class="col-xs">
        <button type="button" class="btn btn-danger" v-on:click="decrementHighScore(game)">- HS</button>
      </div>
    </div>

  </div>
</template>

<script>
//https://medium.com/vue-mastery/vuex-intro-tutorial-course-38ca0bca7ef4
import {Bootstrap} from 'bootstrap'
export default {
  name: 'Games',
  props: {
    games: Array
  },
  components: {
  },
  methods: {
    incrementGame: function(game) {
        game.wins++;
        this.$store.dispatch('addAll',{doc:game,type:'games', name:game.name});
    },
    decrementGame: function(game) {
        game.wins--;
        this.$store.dispatch('subtractAll',{doc:game,type:'games', name:game.name});
    },
    addNewGame: function() {

    },
    incrementHighScore: function(game) {

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
.row {
  padding-bottom: 5px;
}
.challenge-header {
  font-size: 18px;
  display: inline-block;
  margin-bottom: 10px;
  font-weight: bold;
}
.game-name {
  font-weight:bold;
  
  @media (min-width: 576px) {
    font-size:16px;
    text-align: left !important;
  }
}
</style>
