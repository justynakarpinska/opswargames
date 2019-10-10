<template>
  <b-container fluid>
    <b-row>
      <b-col>




    <GameList title="Oto jest lista gier" :uuid="uuid" />
      </b-col>
      <b-col cols="8">
    <GameDetails v-if="uuid && game " error="Brak gry" :uuid="uuid" :game="game" />
      </b-col>

    </b-row>


  </b-container>
</template>

<script>

import GameList from '@/components/GameList.vue'
import GameDetails from '@/components/GameDetails.vue'


export default {
  name: 'games',
  data () {
    return {
     // uuid : this.$route.params.id,
      //game : {name:'ff'}
      form_uuid : null
    }
  },
  components: {
    GameList,
    GameDetails
  },
  computed : {
    uuid() { return this.$route.params.id || null },

    game () { return this.uuid ? this.$store.getters.findGame(this.uuid) : null; }

  },
  methods: {
    change () {
      this.$store.dispatch('change')
    }
  },


}
</script>
