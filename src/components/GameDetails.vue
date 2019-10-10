<template>


    <b-card  :title="game.name">
        <b-card-text>
            {{ game.description }}
        </b-card-text>

    </b-card>

</template>

<script>
    export default {
        name: "GameDetails",
        props: {
            game: {
                type: Object,
                required: true
            },
            uuid : {

                required: true
            }
        },

    }
</script>
