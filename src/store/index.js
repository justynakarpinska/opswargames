import Vue from 'vue'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(Vuex);
Vue.use(VueAxios, axios)


const url = 'https://api.owg.megiteam.pl';
export default new Vuex.Store({
    state: {
        games: []
    },
    getters: {
        findGame: (state) => (uuid) => {
            return state.games.find(game => game.uuid == uuid);
        }
    },
    actions: {
        refreshGames({commit}) {

            axios.get(url + '/games/all').then((response) => {
                commit('updateGames', response.data);

            });

        },
        generateGame({commit}, {uuid}) {

            return axios.post(url + '/games/run/' + uuid, {}).then((response) => {
                return response.data.id;

            });

        },

        checkJob({commit}, {uuid}) {

            return axios.get(url + '/games/check/' + uuid).then((response) => {

                return response.data;

            });

        },

    },
    mutations: {
        updateGames(state, payload) {
            state.games = payload
        }
    },

})