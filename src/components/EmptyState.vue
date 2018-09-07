<template>
    <v-ons-card>
        <img src="https://pbs.twimg.com/media/Bt5MoW0CIAE9Fda.jpg" alt="Onsen UI" style="width: 100%">
        <div class="content">
            There are no {{ type | pluralize }} here!
        </div>
    </v-ons-card>
</template>

<script>
import pluralize from 'pluralize'
import { filter } from 'async';

export default {
    props: {
        type: String
    },

    filters: {
        pluralize: function(value){
            return pluralize(value);
        }
    },

    created(){
        console.log(this.type)
    }
}
</script>

