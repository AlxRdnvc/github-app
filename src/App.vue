<template>
  <v-ons-page>

    <AppToolbar />

    <div class="center">
      <AppSearch :query.sync="query"/>
    </div>
    
    <v-ons-list>
    <v-ons-list-header>
      Repositories of: {{query}}
    </v-ons-list-header>
    <v-ons-list-item v-for="(repo, index) in repos" :key="index">
      <div class="left">
        <img class="list-item__thumbnail" :src="repo.owner.avatar_url" alt="">
      </div>
      <div class="center">
        <span class="list-item__title">{{repo.name}}</span>
        <span class="list-item__subtitle">{{repo.description}}</span>
      </div>
    </v-ons-list-item>
    </v-ons-list>
    
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
