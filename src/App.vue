<template>
    <v-ons-page>
      <AppToolbar />
      <div class="center">
        <AppSearch :query.sync="query"/>
      </div>
    </v-ons-page>
</template>

<script>
  import AppToolbar from './components/AppToolbar.vue'
  import AppSearch from './components/AppSearch.vue'

  export default{
  components: {
    AppToolbar,
    AppSearch
  },
  data(){
    return {
      query:''
    }
  }
};
</script>
