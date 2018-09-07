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
  import debounce from 'lodash/debounce'
  import { gitHub } from './services/GitHub.js'

  export default{
  components: {
    AppToolbar,
    AppSearch
  },
  data(){
    return {
      query:'',
      repos: ''
    }
  },
  methods: {
    getRepos: debounce(function () {
      gitHub.getRepos(this.query)
        .then((response) => {
          this.repos = response.data
        })
    }, 500)
  },
   watch: {
    query (value) {
      this.getRepos(value)
    }
  }
};
</script>
