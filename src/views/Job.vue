<template>

    <b-container fluid>
        <b-row>
            <b-col>
                <GameList title="Oto jest lista gier" :uuid="uuid"/>
            </b-col>
            <b-col cols="8">
                <JobDetails v-if="uuid" error="Brak gry" :uuid="uuid"/>
            </b-col>

        </b-row>

    </b-container>
</template>

<script>

    import GameList from '@/components/GameList.vue'
    import JobDetails from '@/components/JobDetails.vue'


    export default {
        name: 'job',
        components: {
            GameList,
            JobDetails
        },
        computed: {
            uuid() {
                return this.$route.params.id
            },

        }
    }
</script>
