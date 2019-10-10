<template>

        <b-list-group-item>
            <p class="mb-1">
        <router-link :to="link">{{ game.name }}</router-link>
            </p>
            <b-button variant="primary" @click="$emit('generate-game', game.uuid)">generate</b-button>

        </b-list-group-item>

</template>

<script>
    export default {
        name: "Game",
        data () {
            return {
                //link : '/game/' + this.game.uuid,

            }
        },
        props: {
            game: {
                type: Object,
                required: true
            }
        },
        computed: {
            link() {return '/game/' + this.game.uuid;}
        }
    }
</script>
