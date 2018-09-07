<template>
    <v-ons-toolbar>
        <div class="left">
            <slot name="left">
                <v-ons-button>
                    <v-ons-icon icon="md-menu"></v-ons-icon>
                </v-ons-button>
            </slot>
        </div>
        <div class="center" style="text-align: center;">
            {{title}}
        </div>
        <div class="right">
            <slot name="right">
                <v-ons-button>
                    <v-ons-icon icon="md-settings"></v-ons-icon>
                </v-ons-button>
            </slot>
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
