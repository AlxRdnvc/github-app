<template>
    <v-ons-page>
      <AppToolbar />
    </v-ons-page>
</template>

<script>
  import AppToolbar from './components/AppToolbar.vue'

  export default{
  components: {
    AppToolbar
  },
  methods: {
    alert() {
      this.$ons.notification.alert('This is an Onsen UI alert notification test.');
      }
  }
};
</script>
