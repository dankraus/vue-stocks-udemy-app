<template>
    <div>
        <h1>Home</h1>
        <p>This is the home page.</p>
        <p>You have {{ funds | currency}}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('portfolio', [
            'funds'
        ])
    }
}
</script>

<style>

</style>
