<template>
    <div>
        <b-list-group v-if="games.length">
            <Game v-for="game in games" :key="game.id" :game="game" v-on:generate-game="generateGame"/>
        </b-list-group>
        <b-alert v-if="msg" show> {{ msg }}</b-alert>
    </div>
</template>

<script>
    import Game from '@/components/Game.vue';
    import {mapState} from 'vuex';

    export default {
        name: "GameList",
        props: ['title'],
        components: {
            Game
        },
        data() {
            return {
                msg: '',
                isSending: false,

            }
        },
        methods: {
            refreshGames() {
                this.$store.dispatch('refreshGames');

            },
            generateGame(uuid) {
                if (this.isSending) {
                    this.msg = 'While sending... try later';
                    return;
                }

                this.isSending = true;
                this.msg = 'Sending...';
                this.$store.dispatch('generateGame', {uuid})
                    .then((id) => {
                        this.msg = '';
                        this.$router.push({name: 'job', params: {id}}).catch(() => {
                        })
                    })
                    .catch(() => {
                        this.msg = 'Error while sending';
                    })
                    .finally(() => {
                        this.isSending = false;
                    });

            }
        },
        computed: mapState({
            games: state => state.games
        }),


    }
</script>
