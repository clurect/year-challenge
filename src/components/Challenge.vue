<template>
  <div class="container">
    <span class="challenge-header">{{name}}</span>
    <div class="row" v-for="type in challenge" :key="type.name">
      <div class="col-sm text-left">
        <span>{{type.name}}</span>
      </div>
      <div class="col-sm">
        {{type.score}}
      </div>
      <div class="col-xs">
        <button type="button" class="btn btn-success" v-on:click="increment(type)">+ Score</button>
      </div>
      <div>
        <button type="button" class="btn btn-danger" v-on:click="decrement(type)">- Score</button>
      </div>
    </div>

  </div>
</template>

<script>
//https://medium.com/vue-mastery/vuex-intro-tutorial-course-38ca0bca7ef4
// import {Bootstrap} from 'bootstrap'
// import Games from '@/components/Games.vue'
// import NewGameModal from '@/components/modals/NewGameModal.vue'
// import $ from 'jquery';
export default {
  name: 'Challenge',
  props: {
    challenge: Array,
    name: String
  },
  components: {
  },
  methods: {
    increment: function(type) {
        type.score++;
        this.$store.dispatch('addAll',{doc:type,type:'types', name:type.name});
    },
    decrement: function(type) {
        type.score--;
        //this.$store.dispatch('subtractAll',{doc:type,type:'types', name:type.name});
    },
  },
  mounted: function() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.row {
  padding-bottom: 5px;
}
.challenge-header {
  font-size: 18px;
  display: inline-block;
  margin-bottom: 10px;
  font-weight: bold;
}
</style>
