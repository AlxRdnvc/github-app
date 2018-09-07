<template>
        <v-ons-toolbar>
            <div class="left">
                <slot name="left">LEFT</slot>
            </div>
            <div class="center" style="text-align: center;">
                {{title}}
            </div>
            <div class="right">
                <slot name="right">RIGHT</slot>
            </div>
        </v-ons-toolbar>
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
