<template>
    <div>
      <button class="btn btn-primary" data-toggle="modal" data-target="#newGameModal">Add a Game</button>
        <!-- <button v-on:click="foo">Load Data</button> -->
      <div id="accordion" class="accordion" data-accordion>
        <div class="card" v-for="(item,index) in this.$store.state.challenges" :key="item.key">
          <div class="card-header">
            <h2 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" :data-target="'#collapse-'+index" aria-expanded="true" aria-controls="collapseOne">
                {{item.name}}
              </button>
            </h2>
          </div>
          <div class="collapse show" :id="'collapse-'+index" >
            
            <div class="card-body">
              <Games v-bind:games="item.games"/>
            </div>
            
          </div>
        </div>
        <!-- ... -->
      </div>
      <NewGameModal />
      
  
    </div>
</template>

<script>
//https://medium.com/vue-mastery/vuex-intro-tutorial-course-38ca0bca7ef4
import {Bootstrap} from 'bootstrap'
import Games from '@/components/Games.vue'
import NewGameModal from '@/components/modals/NewGameModal.vue'
import $ from 'jquery';
export default {
  name: 'Challenges',
  props: {
    msg: String
  },
  components: {
    Games,
    NewGameModal
  },
  methods: {
    foo: function() {
      this.$store.dispatch('syncAll');
      console.log(this.$store)
    },
    incrementGame: function(game) {
        game.wins++;
        this.$store.dispatch('addAll',{doc:game,type:'games', name:game.name});
    },
    decrementGame: function(game) {
        game.wins--;
        this.$store.dispatch('subtractAll',{doc:game,type:'games', name:game.name});
    }
  },
  mounted: function() {
    console.log('ready!')
    this.$store.dispatch('syncAll').then(() => {
      console.log('hay')
      console.log($('#accordion'))
      //$('.collapse').collapse()
    });
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
