import Vue from 'vue'
import Vuex from 'vuex'
import {db} from './pouch_config'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    challenges:[]
  },
  mutations: {
    incrementCount (state) {
      state.count++;
    },
    setChallenges(state, challenges) {
      state.challenges = challenges;
    },
    updateChallenge(state,challenge) {
      db.put(challenge)
    },
    updateChallenges(state){
      //let self = this;
      db.bulkDocs(state.challenges).then(() => {
        this.dispatch('syncAll');
      })
    }
  },
  actions: {
    syncAll(ctx) {
      console.log(ctx)
      db.allDocs({ include_docs: true })
        .then((res) => {
          console.log(res)
          ctx.commit('setChallenges', res.rows.map(row => row.doc));
        })
        .catch(() => {
          console.log('mamma');
        })
    },
    addAll(ctx, data) {
      let chals = ctx.state.challenges;
      if (data.type == 'games') {
        for (let i = 0; i < chals.length; i++ ){
          let game = chals[i].games.find(function (f) { return f.name == data.name })
          game.plays++;
        }
        ctx.commit('updateChallenges')
      }
      else {
        ctx.commit('updateChallenges')
      }

    },
    subtractAll(ctx, data) {
      let chals = ctx.state.challenges;
      if (data.type == 'games') {
        for (let i = 0; i < chals.length; i++) {
          let game = chals[i].games.find(function (f) { return f.name == data.name })
          game.plays--;
        }
        ctx.commit('updateChallenges')
      }

    },
    addNewGame(ctx, data) {
      console.log(data);
      let chals = ctx.state.challenges;
      for (let i = 0; i < chals.length; i++) {
        chals[i].games.push({"name":data.game_name,"wins":0,"high_score":0,"plays":0});
        
      }
      ctx.commit('updateChallenges')
    }
  }
})
