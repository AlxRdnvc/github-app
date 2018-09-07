<template>
    <v-ons-search-input
        @input="$emit('update:query', $event.target.value)"
        :placeholder="placeholder"
        style = "margin: 10px 0; width: 100%;"
        :value="query"
    ></v-ons-search-input>
</template>

<script>
export default {
    props: {
        query: String,
        placeholder: {
        type: String,
        default: 'search...'
        }
    }
}
</script>