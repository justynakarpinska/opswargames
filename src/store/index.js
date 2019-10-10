import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex);
Vue.use(axios)


/*
const games = {
  namespaced: true,
  state : {all:[]},
  actions : {
    refreshGames(context) {
      return new Promise((resolve) => {
        let config = {
          headers : {
            'Accept' : 'application/json'
          }
        }
        this.$http.get('https://api.owg.megiteam.pl/games/all', config).then((response) => {
          context.commit('updateGames', response.data);
          resolve();
        });
      });
    }
  },
  mutations : {
    updateGames(state, payload) {
      state.all = payload
    }},
}


const liczba = {
  namespaced: true,
  state : {liczba:0},
  actions : {

  },
  mutations : {
    increment(state, n) {
      state.liczba += n
    }
  }
}



export default new Vuex.Store({
  modules: {
    liczba,
    games
  },
  strict: debug
})
*/

export default new Vuex.Store({
  state: {
    liczba : 1,
    games : []
  },
  getters : {
      findGame : (state) => (uuid) => {
          return state.games.find(game => game.uuid == uuid) ;
           // return {name:'ooooooo'}
      }
  },
  actions : {
    refreshGames({ commit }) {
      //return new Promise((resolve) => {
        let config = {
          headers : {
            'Accept' : 'application/json'
          }
        }
       axios.get('https://api.owg.megiteam.pl/games/all', config).then((response) => {
          commit('updateGames', response.data);

        });
     // });
    },
      generateGame({ commit }, {uuid}) {

          return new Promise((resolve, reject) => {
              setTimeout(() => {
                  //commit('increment')
                  console.log('wyslane !!!');
                  resolve(Math.random());
                 // reject(Math.random());

              }, 1000);
          });

      },

      checkJob({ commit }, {uuid}) {
          console.log('sprawdzam ' + uuid);
          return new Promise(function(resolve) {
              setTimeout(() => {
                  //commit('increment')
                  console.log('wyslane 2');
                  //resolve(Math.random());
                  resolve('ok');

              }, 1000);
          });

      },

     change({ commit }) {
         commit('updateGames', [ { "default_duration_minutes": "60", "description": "A client of mine uses Django for their website and asked for a small change. I accidentally rebooted the server and now the site shows \"Server Error (500)\". I need to get the site back up. Please help.", "name": "js app not working!", "uuid": "odfdb726-36c9-4f73-b98e-abaa4432581a" }, { "default_duration_minutes": "60", "description": "A client of mine uses Django for their website and asked for a small change. I accidentally rebooted the server and now the site shows \"Server Error (500)\". I need to get the site back up. Please help.", "name": "php app not working!", "uuid": "idfdb726-36c9-4f73-b98e-abaa4432581a" }]);
     }
  },
  mutations : {
    updateGames(state, payload) {
      state.games = payload
    }},

})