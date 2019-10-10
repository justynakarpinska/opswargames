<template>
    <div>


        <b-card  :title="uuid">
            <b-card-text>
                <div v-if="load" class="text-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>


                {{ msg }}
            </b-card-text>

        </b-card>
    </div>
</template>

<script>
    export default {
        name: "JobDetails",
        data () {
            return {
                msg : '',
                state : 0,
                intervalid : null,
                load : 1,

            }
        },
        props: {

            uuid : {
                required: true
            }
        },


        mounted : function(){
            this.refreshJob();
            this.checking();

        },
        beforeDestroy () {
            this.finishChecking();

        },
        watch:{
            'uuid'() {
                this.finishChecking();

                this.refreshJob();
                this.checking();

            }
        },
        methods : {
            checking() {
                this.load = 1;
                this.msg ='';
                    this.intervalid = setInterval(() => {
                    this.refreshJob();
                    console.log ('ooo');
                }, 30000);
            },
            finishChecking() {
                this.load = 0;
                clearInterval(this.intervalid)
            },
            refreshJob() {

                this.$store.dispatch('checkJob', {uuid : this.uuid})
                    .then((state) => {
                        if(state == 'started'){
                            this.msg = 'Start creating game' ;
                        } else if (state == 'failed') {
                            this.msg = 'Creating game failed' ;
                            this.finishChecking();
                        } else if (state == 'finished') {
                            this.msg = 'Game was created' ;
                            this.finishChecking();
                        } else {
                            this.msg = state ;
                        }

                    })
                    .catch(() => { this.msg = 'Error while checking' ; })
                    .finally(() => { });

            }
        },




    }
</script>
