<template>
    <div>  to jest gra
     {{ game.name }}
        <router-link :to="link">{{ game.name }}</router-link>
    </div>
</template>

<script>
    export default {
        name: "GameForm",
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
