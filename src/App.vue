<template>
  <v-ons-page>

    <AppToolbar />

    <div class="center">
      <AppSearch :query.sync="query"/>
      <v-ons-progress-circular indeterminate v-if="isLoading"></v-ons-progress-circular>
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
      <EmptyState v-if="error" :type="type"/>
    </div>
    
  </v-ons-page>
</template>

<script>
  import AppToolbar from './components/AppToolbar.vue'
  import AppSearch from './components/AppSearch.vue'
  import debounce from 'lodash/debounce'
  import { gitHub } from './services/GitHub.js'
  import EmptyState from './components/EmptyState.vue'

  export default{
  components: {
    AppToolbar,
    AppSearch,
    EmptyState
  },
  data(){
    return {
      query:'',
      repos: [],
      isLoading: false,
      type: 'repository',
      error: ''
    }
  },
  methods: {
    getRepos: debounce(function () {
      this.isLoading = true
      gitHub.getRepos(this.query)
        .then((response) => {
          this.repos = response.data
          this.error = ''
        })
        .catch((error) => {
          this.error = error;
          this.repos = []
        })
        .finally(() => { 
          this.isLoading = false; 
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
