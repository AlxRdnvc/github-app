<template>
    <v-ons-page>
        <v-ons-toolbar>
            <div class="left">
                <slot>LEFT</slot>
            </div>
            <div class="center">
                {{title}}
            </div>
            <div class="right">
                <slot>RIGHT</slot>
            </div>
        </v-ons-toolbar>
    </v-ons-page>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: 'Github App'
    }
  }
}
</script>
