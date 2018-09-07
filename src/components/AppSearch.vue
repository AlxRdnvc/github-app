<template>
    <v-ons-input
        :placeholder="placeholder"
        style = "
            background-color: #333;
            margin-top: 10px;
            width: 100%;
        "
    ></v-ons-input>
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