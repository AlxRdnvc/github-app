<template>
    <v-ons-input
        :placeholder="placeholder"
    ></v-ons-input>
</template>

<script>
export default {
    props: {
        query: String,
        placeholder: {
        type: String,
        default: 'search for something...'
        }
    }
}
</script>

